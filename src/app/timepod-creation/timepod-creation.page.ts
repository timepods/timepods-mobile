import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UsernameValidator } from '../validators/username.validator';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-timepod-creation',
  templateUrl: './timepod-creation.page.html',
  styleUrls: ['./timepod-creation.page.scss'],
})
export class TimepodCreationPage implements OnInit {
  photo: SafeResourceUrl;
  validations_form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private sanitizer: DomSanitizer)
    { }

  ngOnInit() {

    /*this.validations_form = new FormGroup({
      timepodName: new FormControl(),
      timepodNotes: new FormControl()
    });*/

    this.validations_form = this.formBuilder.group({
      timepodName: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ]))
    });
  }
  
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  validation_messages = {
    'timepodName': [
      { type: 'required', message: 'TimepodName is required.' },
      { type: 'minlength', message: 'It must be at least 5 characters long.' },
      { type: 'maxlength', message: 'the name should be less than 25 characters long.' },
      //{ type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ]
  };

  onSubmit(values) {
    console.log("form content is");
    console.log(values);
    }
}
