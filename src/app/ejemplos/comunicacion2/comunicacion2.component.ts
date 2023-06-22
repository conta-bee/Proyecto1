import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/*Vamos a configurarlo como si fuera un hijo  */
@Component({
  selector: 'app-comunicacion2',
  templateUrl: './comunicacion2.component.html',
  styleUrls: ['./comunicacion2.component.css']
})
export class Comunicacion2Component implements OnInit {

  /*Para el caso de setear  parametros dentro de la declaracion de tus componentes
  vas a utilizar imput este es un decorador*/

  /*Esta forma de decorarr variables me permite asignar valores desde otro componente ajeno
  a su componente origen*/
  @Input () titulo:string;
  @Input () subtitulo:string;
  //Declarada en el componente que va ser usado como hijo
  //pemituendo que el padre lo pueda recojer cuando quiera
  // una clase especificando e tipo de clase EventEmitter<string>();
  @Output() valordelhijo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void
  {
    //metodo emit
    this.valordelhijo.emit("valor desde el hijo");
  }

}
