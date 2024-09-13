import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfasisPageRoutingModule } from './confasis-routing.module';

import { ConfasisPage } from './confasis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfasisPageRoutingModule
  ],
  declarations: [ConfasisPage]
})
export class ConfasisPageModule {}
