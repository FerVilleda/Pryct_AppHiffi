import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'loggin',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'loggin',
    loadChildren: () => import('./loggin/loggin.module').then( m => m.LogginPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'graciasxunirte',
    loadChildren: () => import('./graciasxunirte/graciasxunirte.module').then( m => m.GraciasxunirtePageModule)
  },
  {
    path: 'contenido',
    loadChildren: () => import('./contenido/contenido.module').then( m => m.ContenidoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'assessmenthiffi',
    loadChildren: () => import('./assessmenthiffi/assessmenthiffi.module').then( m => m.AssessmenthiffiPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'resultadoshiffi',
    loadChildren: () => import('./resultadoshiffi/resultadoshiffi.module').then( m => m.ResultadoshiffiPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'graficos-xuser',
    loadChildren: () => import('./graficos-xuser/graficos-xuser.module').then( m => m.GraficosXuserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
