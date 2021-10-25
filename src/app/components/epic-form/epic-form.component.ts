import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EpicService} from '../../services/epic.service';
import {GalleryItem, ImageItem} from 'ng-gallery';
import {EpicPhoto} from '../../interfaces';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-epic-form',
  templateUrl: './epic-form.component.html',
  styleUrls: ['./epic-form.component.scss']
})
export class EpicFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  photos: EpicPhoto[] = [];
  images: GalleryItem[] = [];
  error = new Subject<string>();

  constructor(private readonly formBuilder: FormBuilder, private epicService: EpicService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.reactiveForm = this.formBuilder.group(
      {
        epicDate: [new Date(), Validators.required],
      }
    );
  }

  onFetchImages(): void {
    this.epicService.getEpicPhotos(this.reactiveForm.value).subscribe(photos => {
      console.log(photos);
      this.photos = photos;
      this.images = photos.map(p => new ImageItem({src: p.image, thumb: p.image}));
    }, error => {
      console.log(`${error.message}-${error.status}`);
      this.error.next(`${error.message}-${error.status}`);
    });
  }

}
