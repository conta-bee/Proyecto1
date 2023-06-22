//este archivo tambien importa el NgModule
import { NgModule } from '@angular/core';
//este modulo utiliza una aplicacion de angular qie se llama
//RouterModule
import { RouterModule, Routes } from '@angular/router';
//importacion de HomeComponent 
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';

//areglo del tipo routes objeto que contenera las rutas 
const routes: Routes = [
//ingreso de la ruta Home no especificada para que se 
//redirecciones cuando en la ruta /rutanovalida
//apunte a home compont creado antes
  {path: "", component : HomeComponent},
  //ruta con valor formulario llamado igual que el componente creado
  //antes
  {path: "formularios", component : FormulariosComponent},
  //ruta llamada del componente que se halla en 
  //c:\Users\desarrollo\Desktop\Desarrollo-Frontend-Angular\Proyecto1\src\app\paginas\material
  {path: "material", component : MaterialComponent},
  {path: "ruta-2/:id/:slug", component : Ruta2Component}
];

//y hace la inyeccion
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//exportacion de una clase AppRoutingModule
export class AppRoutingModule { }
