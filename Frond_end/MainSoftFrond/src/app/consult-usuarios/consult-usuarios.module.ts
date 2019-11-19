import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultUsuariosPage } from './consult-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultUsuariosPage]
})
export class ConsultUsuariosPageModule {}
