import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{
//Declaracion de variables
nombre:string='Julio Armando';
correo:any='indo@mail.com';
edad:number=19;
numero:number = 14;
fecha = new Date;
html:string = `<strong>texto en negritas</strong>`
//Declaracion de areglo
paises : Array<any>

ejemeplo : string;
cantidad:number = 1234567;
texto : string = "Use tuberías para transformar cadenas, montos de moneda, fechas y otros datos para su visualización. Las canalizaciones son funciones simples para usar en expresiones de plantilla para aceptar un valor de entrada y devolver un valor transformado. Las tuberías son útiles porque puede usarlas en toda su aplicación, mientras solo declara cada tubería una vez. Por ejemplo, usaría una canalización para mostrar una fecha como el 15 de abril de 1988 en lugar del formato de cadena sin procesar."












constructor() { 
this.paises=[
  {
    nombre : "Chile",
    dominio : "cl"
  },
  {
    nombre : "Peru",
    dominio : "pe"
  },
  {
    nombre : "Bolivia",
    dominio : "bo"
  },
  {
    nombre : "Argentina",
    dominio : "ar"
  },
  {
    nombre : "Chile",
    dominio : "cl"
  },
  {
    nombre : "Mexico",
    dominio : "mx"
  },
  {
    nombre : "España",
    dominio : "es"
  }
]
}

ngOnInit(): void {
}

}

















