import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaFecha'
})
export class FormateaFechaPipe implements PipeTransform {

  transform(value: Date){

    //Declaracion de variables con funciones(metodos) 
    //que usan la fecha
    let anio = value.getUTCFullYear();
    let mes;
    let dia = value.getUTCDate();
    
    switch(value.getUTCMonth()+1)
    {
      case 1:
        mes = "Enero";
        break;

        case 2:
          mes = "Febrero";
          break;

          case 3:
            mes = "Marzo";
            break;

            case 4:
              mes = "Abril";
              break;

              case 5:
                mes = "Mayo";
                break;

                case 6:
                  mes = "Junio";
                  break;

                  case 7:
                    mes = "Julio";
                    break;

                    case 8:
                      mes = "Agosto";
                      break;

                      case 9:
                        mes = "Septiembre";
                        break;

                        case 10:
                          mes = "Octubre";
                          break;

                          case 11:
                            mes = "Nombre";
                            break;

                            case 12:
                              mes = "Diciembre";
                              break;
    }
    let dias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Juevez',
      'Viernes',
      'Sabado'
    ];

    /*La variable nombreDia es igual a uno de los dias del areglo dias
    dias[posicion de indice dado po la expresion [value.getDay()] ] */
    let nombreDia = dias[value.getDay()];
    return `${nombreDia} ${dia} de ${mes} de ${anio}`;

  }

}
