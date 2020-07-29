import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraciasxunirtePageRoutingModule } from './graciasxunirte-routing.module';

import { GraciasxunirtePage } from './graciasxunirte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraciasxunirtePageRoutingModule
  ],
  declarations: [GraciasxunirtePage]
})
export class GraciasxunirtePageModule {}
