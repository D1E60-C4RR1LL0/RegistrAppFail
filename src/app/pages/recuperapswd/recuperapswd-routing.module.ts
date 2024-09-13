import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperapswdPage } from './recuperapswd.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperapswdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperapswdPageRoutingModule {}
