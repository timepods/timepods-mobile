import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-timepod-creation',
  templateUrl: './timepod-creation.page.html',
  styleUrls: ['./timepod-creation.page.scss'],
})
export class TimepodCreationPage implements OnInit {

  validations_form: FormGroup;

  constructor(public formBuilder: FormBuilder) { 

    
   }

  ngOnInit() {
    this.validations_form = new FormGroup({
      timepodName: new FormControl(),
      timepodNotes: new FormControl()
    });
  }

  onSubmit(values) {
    console.log("form content is");
    console.log(values);
    };
}
