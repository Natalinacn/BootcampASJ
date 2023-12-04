// -------------------------------------------Ejercicio 1-------------------------------------------
//PAR O IMPAR

// let num = parseInt(prompt("Ingrese un número"));

// switch(num % 2){

//     case 0:

//     alert("EL número es par");

//     break;

//     case 1:
//         alert("EL número es impar");
//         break;

//     default:
//         alert("Usted no ingresó un número");

// }

// -------------------------------------------Ejercicio 2-------------------------------------------
// Usando la estructura switch(), creá un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

// En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.

// let palabra = prompt("Ingrese una palabra: casa, perro, pelota, árbol o genio").toLowerCase();

// switch(palabra){

//     case "casa":
//         alert("House");
//         break;
//     case "perro":
//         alert("Dog");
//         break;
//     case "pelota":
//         alert("Ball");
//     case "árbol":
//         alert(Tree)
//         break;
//     case "genio":
//         alert("Genius");
//         break;
//     default:
//         alert("La palabra ingresada es incorrecta");
//         break;
// }

// -------------------------------------------Ejercicio 3-------------------------------------------
// Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:

// Muy Mala.
// Mala.
// Mediocre.
// Buena.
// Muy buena.
// Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.

// Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".

// Cuando el usuario haya valorado la película, agradecele su visita.

// let valor = Number(prompt("Valore la película que vió del 1 al 5"));

// switch(valor){
//     case 1:
//         alert("Haz valorado la película como MUY MALA. Lamento que no te haya gustado");
//         alert("Gracias por tu visita");
//         break;
//     case 2:
//         alert("Haz valorado la película como MALA. Lamento que no te haya gustado");
//         alert("Gracias por tu visita");
//         break;
//     case 3:
//         alert("Haz valorado la película como MEDIOCRE. Lamento que no te haya gustado");
//         alert("Gracias por tu visita");
//         break;
//     case 4:
//         alert("Haz valorado la película como BUENA. Qué bueno que te haya gustado");
//         alert("Gracias por tu visita");
//         break;
//     case 5:
//         alert("Haz valorado la película como MUY BUENA. Qué bueno que te haya gustado tanto");
//         alert("Gracias por tu visita");
//         break;
//     default:
//         alert("Ingresaste un valor inválido");
//         break;
// }

// -------------------------------------------Ejercicio 4-------------------------------------------

//Pedir al usuario que ingrese un número y en base a eso hacer una sumatoria de todos los números hasta ese número y mostrar el promedio.

//Extra: validar que lo ingresado sea un numero, en caso contrario, mostrar un alert avisando que el valor no es válido.

// let num = Number(prompt("Ingrese un número del 1 al 10"));

// let sum = 0;
// let contador = 0;

// while(contador <= num){

//     sum = sum + contador;
//     contador++;

// }

// let promedio = sum / num;

// alert(`El promedio es de ${promedio}`);

// -------------------------------------------Ejercicio 5-------------------------------------------

// Contador De Positivos

// En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
// Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.

// let numEnt = Number(prompt("Ingrese un número entero. Para terminar ingrese un número negativo"));

// let contPositivos = 0;

// while (numEnt >= 0){

//     contPositivos++;

//     numEnt = Number(prompt("Ingrese otro número o termine con un número negativo"));

// }

// alert(`Usted ingresó ${contPositivos} números positivos`);

// -------------------------------------------Ejercicio 6-------------------------------------------

// Hacer con cualquier cosa

// Escribir un programa que imprima por consola los números del 1 a 100.

//Si el número es múltiple de 3, deberá imprimir "Fizz" en vez del número.
//Si es multiplo de 5, deberá imprimir "Buzz"
// SI es multiplo de 3 y de 5 (a la misma vez) deberá imprimir "FizzBuzz"

// let num = 0;

// while (num <= 100) {
//     if (num % 3 == 0 && num % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (num % 3 == 0) {
//       console.log("Fizz");
//     } else if (num % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(num);
//     }
  
//     num++;
//   }


// -------------------------------------------Ejercicio 7-------------------------------------------

//Simular como un bar con una sola mesa. Quiero que cuando venga un cliente el usuario pueda simular el hecho de que elija productos con titulo y precio e ir eligiendo productos. Que pueda pedir la cuenta con el total a pagar. Preguntar si quiere dejar propina y sumarla al total. EL mozo puede contar chistes o saludarlo al inicio y al final.

//Armar menu con opciones, si quiere ver el menu, que le cuenten un chiste, pedir la cuenta

// Buen dia
// Que deser comprar? Mostrar menu
//Desea agregar mas productos?
//if dice que no preguntar si quiere dejar propina.
//dar la cuenta con el total y propina si dejó
//despedirse


let cuenta = 0;
let respuesta;

do{
    
let opcion = parseInt(prompt("Buenos días!! Ingrese una opción: \n 1.Agregar productos \n 2.Escuchar chiste \n 3. Pedir la cuenta"));


switch(opcion){
    case 1:

    let menu = parseInt(prompt("Puede elegir: \n 1.Pizza----$3000 \n 2.Empanadas----$6000 \n 3.Colacola----$1500 \n 4.Sprite----$1300"));
        switch(menu){
            case 1:
                alert("Usted eligió Pizza")
                cuenta = cuenta + 3000;
                break;
            case 2:
                alert("Usted eligió Empanadas")
                cuenta = cuenta + 6000;
                break;
            case 3:
                alert("Usted eligió Cocacola")
                cuenta = cuenta + 1500;
                break;
            case 4:
                alert("Usted eligió Sprite")
                cuenta = cuenta + 1300;
                break;
            default:
                alert("Ingrese una opción válida");
                        break;
        }
    break;

    case 2:
        alert("¿Quién es mayor? Un niño de un año o una gallina de un año? La gallina, porque tiene un año y pico");

    break;

    case 3:


    let propina = parseInt(prompt("Ingrese el monto de la propina si desea dejar"));
       

        let total = cuenta + propina;

        alert("El total de su cuenta es de " + total);
        alert("Adiós, que tenga un excelente día");
        break;

    default:
        alert("La opción ingresada no es válida");
        break;
}

    respuesta = prompt("Desea volver al menú? s/n");

}while(respuesta === "s");


