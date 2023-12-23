import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipePrueba'
})
export class PipePruebaPipe implements PipeTransform {

  transform(numeros: number[]): number[] {

    const numerosPrimos: number[] = [];

    for (let i = 0; i < numeros.length; i++) {
      if (this.esPrimo(numeros[i])) {
        numerosPrimos.push(numeros[i]);
      }
    }

    return numerosPrimos;
  }

  esPrimo(numero: number): boolean {
    if (numero < 2) {
      return false;
    }

    for (let j = 2; j < numero; j++) {
      if (numero % j === 0) {
        return false; 
      }
    }

    return true; 
  }
}