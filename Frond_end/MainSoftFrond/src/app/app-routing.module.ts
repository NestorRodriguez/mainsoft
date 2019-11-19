import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'seleccion', loadChildren: './seleccion/seleccion.module#SeleccionPageModule' },
  { path: 'registro-ofert', loadChildren: './registro-ofert/registro-ofert.module#RegistroOfertPageModule' },
  { path: 'consult-ofert', loadChildren: './consult-ofert/consult-ofert.module#ConsultOfertPageModule' },
  { path: 'consult-usuarios', loadChildren: './consult-usuarios/consult-usuarios.module#ConsultUsuariosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
