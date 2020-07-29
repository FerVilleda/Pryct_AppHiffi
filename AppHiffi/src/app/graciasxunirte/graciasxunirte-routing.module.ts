import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraciasxunirtePage } from './graciasxunirte.page';

const routes: Routes = [
  {
    path: '',
    component: GraciasxunirtePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraciasxunirtePageRoutingModule {}
