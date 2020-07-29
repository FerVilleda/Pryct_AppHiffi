import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoshiffiPageRoutingModule } from './resultadoshiffi-routing.module';

import { ResultadoshiffiPage } from './resultadoshiffi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoshiffiPageRoutingModule
  ],
  declarations: [ResultadoshiffiPage]
})
export class ResultadoshiffiPageModule {}
