import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultAplicacionesPage } from './consult-aplicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultAplicacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultAplicacionesPage]
})
export class ConsultAplicacionesPageModule {}
