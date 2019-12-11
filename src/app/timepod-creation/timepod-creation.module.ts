import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimepodCreationPageRoutingModule } from './timepod-creation-routing.module';

import { TimepodCreationPage } from './timepod-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TimepodCreationPageRoutingModule
  ],
  declarations: [TimepodCreationPage]
})
export class TimepodCreationPageModule {}
