import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperapswdPageRoutingModule } from './recuperapswd-routing.module';

import { RecuperapswdPage } from './recuperapswd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperapswdPageRoutingModule
  ],
  declarations: [RecuperapswdPage]
})
export class RecuperapswdPageModule {}
