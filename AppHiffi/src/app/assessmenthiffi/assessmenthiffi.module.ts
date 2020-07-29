import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessmenthiffiPageRoutingModule } from './assessmenthiffi-routing.module';

import { AssessmenthiffiPage } from './assessmenthiffi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssessmenthiffiPageRoutingModule
  ],
  declarations: [AssessmenthiffiPage]
})
export class AssessmenthiffiPageModule {}
