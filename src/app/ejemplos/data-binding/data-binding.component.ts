import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  /*Declaracion De Variables */
  disabled:boolean=false; //variable que interactua con la propiedad disabled propiedad de presion de boton
  color:string="green"
  texto:string="Mi muñeca me hablo xd";
  img:string = "pantera.jpg"
  ancho:number=100;
  alto:number=100;

  constructor() {}

  ngOnInit(): void {

  }
/*funcion involucrada en unn evento que cambia imaen y dimenciones en la itiqueta img */
  cambiar()
  {
    this.img = "circuito.jpg";
    this.ancho=300;
    this.alto=400;
  }

}
