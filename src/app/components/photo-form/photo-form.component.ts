import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GalleryItem, ImageItem } from 'ng-gallery';
import {ROVERS, TYPE_OF_CAMERA} from '../../constants';
import {Options, RoverPhotos} from '../../interfaces';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {RoversService} from '../../services/rovers.service';
import {UntilDestroy} from '@ngneat/until-destroy';
import {Subject} from 'rxjs';

@UntilDestroy({checkProperties: true})
@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  rovers: Options[] = [...ROVERS];
  // cameras: Record<string, Rovers[]>
  cameras: Options[] = [];
  photos: RoverPhotos[] = [];
  images: GalleryItem[] = [];
  error = new Subject<string>();

  constructor(private readonly formBuilder: FormBuilder, private roversService: RoversService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.subscribeToRoverChanges();
  }

  public onFetchPhotos(): void {
    this.roversService.getRoverPhotos(this.reactiveForm.value)
      .pipe(
        map(({photos}) => photos),
        filter(res => !!res)
      )
      .subscribe(photos => {
        this.photos = photos;
        this.images = photos.map(p => new ImageItem({ src: p.img_src, thumb: p.img_src }));
      }, error => {
        console.log(`${error.message}-${error.status}`);
        this.error.next(`${error.message}-${error.status}`);
      });
  }

  private createForm(): void {
    this.reactiveForm = this.formBuilder.group(
      {
        rover: ['', Validators.required],
        camera: ['', Validators.required],
        sol: ['', Validators.required]
      }
    );
  }

  private subscribeToRoverChanges(): void {
    this.reactiveForm.get('rover')?.valueChanges.pipe(distinctUntilChanged()).subscribe(
      (value: string) => {
        const cameras = TYPE_OF_CAMERA?.[value] ?? [];
        this.cameras = [...cameras];
      }
    );
  }

}
