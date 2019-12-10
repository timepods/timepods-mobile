import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepod-creation',
  templateUrl: './timepod-creation.page.html',
  styleUrls: ['./timepod-creation.page.scss'],
})
export class TimepodCreationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(form) {
    console.log("form content is");
    console.log(form);
    console.log(form.value);
    };
}
