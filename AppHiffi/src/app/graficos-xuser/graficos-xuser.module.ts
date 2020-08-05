import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficosXuserPageRoutingModule } from './graficos-xuser-routing.module';

import { GraficosXuserPage } from './graficos-xuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficosXuserPageRoutingModule
  ],
  declarations: [GraficosXuserPage]
})
export class GraficosXuserPageModule {}
