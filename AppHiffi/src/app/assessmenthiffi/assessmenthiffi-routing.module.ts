import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmenthiffiPage } from './assessmenthiffi.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmenthiffiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmenthiffiPageRoutingModule {}
