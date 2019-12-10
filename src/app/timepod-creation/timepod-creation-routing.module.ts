import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimepodCreationPage } from './timepod-creation.page';

const routes: Routes = [
  {
    path: '',
    component: TimepodCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimepodCreationPageRoutingModule {}
