import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  foods: Food[] = [
    {value: 'pizza'},
    {value: 'pizza2'}
  ];

  reactiveForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void{
    this.reactiveForm = this.formBuilder.group(
      {
        rover: ['', Validators.required],
        camera: ['', Validators.required],
        sol: ['', Validators.required]
      }
    );
  }

}
