import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  // Todos Components, Diretivas e Pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  // Outros Modulos
  imports: [
    BrowserModule,
    CursosModule
  ],
  // Serviços
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
