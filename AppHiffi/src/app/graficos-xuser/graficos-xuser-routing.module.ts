import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficosXuserPage } from './graficos-xuser.page';

const routes: Routes = [
  {
    path: '',
    component: GraficosXuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficosXuserPageRoutingModule {}
