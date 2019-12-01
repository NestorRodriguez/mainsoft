import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeleccionUsuarioPage } from './seleccion-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeleccionUsuarioPage]
})
export class SeleccionUsuarioPageModule {}
