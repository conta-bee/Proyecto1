import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaNumeros'
})
export class FormateaNumerosPipe implements PipeTransform {

  transform(value: number) {
    //retorno de un valor que toma como parametro a value vendra de 
    //
    return "$" + new Intl.NumberFormat().format(value);
  }

}

