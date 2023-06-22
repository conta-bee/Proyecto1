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
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { Comunicacion2Component } from './ejemplos/comunicacion2/comunicacion2.component';
import { HomeComponent } from './paginas/home/home.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';


//en el app.module tambien esta importado este NgModule para 
//rutas
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
    CicloDeVidaComponent,
    ComunicacionComponent,
    Comunicacion2Component,
    HomeComponent,
    Ruta2Component,
    FormulariosComponent,
    MaterialComponent
    
    
  ],
  //importacion del AppRoutingModule que viene del app-routing.module  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
