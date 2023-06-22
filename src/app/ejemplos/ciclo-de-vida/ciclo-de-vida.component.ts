import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent {
  texto:string="texto inicial";


  /*Angular te ofrece  una serie de metoodo que nos sirve para trbajar
  con los ciclos de vida */


  /*Cada vez que se vea un metodo constructor dentro de una clase
  se tiene que asumir que es un metodo inicializador que se ejecuta
  al inicio de la clase */
  constructor() {
    
  //se ejecuta al inicio de la clase metodo que ofrece angular para trabajar coon los ciclos de vida
  console.log("ejecucion en el constructor");
  }

 
  ngOnInit(): void
  {
     //metodo mas usado en ciclos de vida que permmite inicializar valores
   console.log("Ejecucion desde el OnInit");
  }

  ngDoCheck()
  {
    //se ejecuta cuando el componente es afectado por algun cambio metodo que ofrece angular para trabajar coon los ciclos de vida
    console.log("Se ejecuta el metodo ng DoCheck");
  }

  ngOnDestroy()
  {
    //se ejecuta cuando se cierra el componente metodo que ofrece angular para trabajar coon los ciclos de vida
    alert("Cierre");

  }

  cambiarTexto()
  {
    //metodo creado por el programador
    this.texto="otro valor con and";
    console.log("ejecucion en el ngDoCheck cambiando al texto");
  }

}
