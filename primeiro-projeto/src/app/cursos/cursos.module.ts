import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, DetalheComponent],
  // Necessário para disponibilizar os components para outros módulos
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
