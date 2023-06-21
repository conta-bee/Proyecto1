import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importacion del archivo EjemploComponet
import { EjemploConponent } from './ejemplo.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplos/ejemplo3/ejemplo3.component';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { FormatoFechaPipe } from './utilidades/formato-fecha.pipe';
import { FormateaFechaPipe } from './utilidades/formatea-fecha.pipe';
import { FormateaNumerosPipe } from './utilidades/formatea-numeros.pipe';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { CicloDeVidaComponent } from './ejemplos/ciclo-de-vida/ciclo-de-vida.component';



@NgModule({
  declarations: [
    AppComponent,
    //Declaracion del elemento EjemploComponent
    EjemploConponent,
    Ejemplo2Component,
    Ejemplo3Component,
    BasicosComponent,
    FormatoFechaPipe,
    FormateaFechaPipe,
    FormateaNumerosPipe,
    DataBindingComponent,
    CicloDeVidaComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
