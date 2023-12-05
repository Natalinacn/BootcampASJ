//******************************************EJERCICIO BAR*******************************************************


// let cuenta = 0;
// let respuesta;

// const saludar = () =>{
//     prompt(
//         "Buenos días!! Ingrese una opción: \n 1.Agregar productos \n 2.Escuchar chiste \n 3. Pedir la cuenta"
//       )
// }

// const agregarProductos = () => {
//   let menu = parseInt(
//     prompt(
//       "Puede elegir: \n 1.Pizza----$3000 \n 2.Empanadas----$6000 \n 3.Colacola----$1500 \n 4.Sprite----$1300"
//     )
//   );
//   switch (menu) {
//     case 1:
//       alert("Usted eligió Pizza");
//       cuenta = cuenta + 3000;
//       break;
//     case 2:
//       alert("Usted eligió Empanadas");
//       cuenta = cuenta + 6000;
//       break;
//     case 3:
//       alert("Usted eligió Cocacola");
//       cuenta = cuenta + 1500;
//       break;
//     case 4:
//       alert("Usted eligió Sprite");
//       cuenta = cuenta + 1300;
//       break;
//     default:
//       alert("Ingrese una opción válida");
//       break;
//   }
// };


// const contarChiste = () =>{
//     alert(
//         "¿Quién es mayor? Un niño de un año o una gallina de un año? La gallina, porque tiene un año y pico"
//       );
// }

// const pedirCuenta = () =>{
//     let propina = parseInt(
//         prompt("Ingrese el monto de la propina si desea dejar")
//       );

//       let total = cuenta + propina;

//       alert("El total de su cuenta es de " + total);
//       alert("Adiós, que tenga un excelente día");
// }




//*************** Cödigo****************


// do {
//   let opcion = parseInt(
//     saludar() );

//   switch (opcion) {
//     case 1:
//       agregarProductos();
//       break;

//     case 2:
//         contarChiste();
//         break;

//     case 3:
//         pedirCuenta();
//         break;

//     default:
//       alert("La opción ingresada no es válida");
//       break;
//   }

//   respuesta = prompt("Desea volver al menú? s/n");
// } while (respuesta === "s");









//******************************************EJERCICIO FIBONACCI*******************************************************

// Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
// Ej: el usuario ingresa el 8, mostrar:
// 0 1 1 2 3 5 8 13 21 34



let num = parseInt(prompt("Ingrese un número"));


let fibonacci = [];

let valor1 = 0;
let valor2 = 1;

function armarFibonacci(num){


  for (let i = 0; i < num; i++) {

  fibonacci.push(valor1);

  let nuevoValor = valor1 + valor2;

  valor1 = valor2;
  valor2 = nuevoValor;
  
}
}

armarFibonacci(num);

console.log(fibonacci);

