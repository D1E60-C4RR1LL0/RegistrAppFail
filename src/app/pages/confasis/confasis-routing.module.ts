import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfasisPage } from './confasis.page';

const routes: Routes = [
  {
    path: '',
    component: ConfasisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfasisPageRoutingModule {}
