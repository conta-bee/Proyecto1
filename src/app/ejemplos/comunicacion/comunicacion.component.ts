import { Component, OnInit } from '@angular/core';

/*Ahora esta comfigurado como el padre */
@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit{
/*Variables declaradas  */
  texto1:string="texto 1";
  texto2:string="texto 2";
  //variable hijo que recogera valor del hijo
  hijo:string;
  constructor() {}

  ngOnInit() : void{
  }
  //metodo que usa paramerro values string para que el metodo le pase
  //un valor a la variable hijo del padre
  actualizarHijo(value:string)
  {
    this.hijo = value;
  }

}
