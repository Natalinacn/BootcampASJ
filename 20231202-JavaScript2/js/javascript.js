//------------------------------------------EJERCICIO 1-------------------------------------------------------

//Ejercicio 1: Qué devuelve cada expresión?

//TRUE porque se cumple la condición de que x es igual a 10

// let x=10;
// let y ="a";

// y==="b" || x >= 10;

//FALSE porque ambas partes dan TRUE pero al tener la negación convierto a False

// let x=3;
// let y=8;

//     //true    false        false        true

// !(x == "3" || x === y) && !(y !== 8 && x <= y)

//

//False ya que ambas condiciones dan TRUE pero está negado

// let str = ""; //False
// let msj = "jaja!"; //True
// let esGracioso = "false"; //True
// !((str || msj) && esGracioso)

//------------------------------------------EJERCICIO 2-------------------------------------------------------

// Ejercicio 2: Comparaciones
// Escribí en tu consola estas expresiones teniendo en cuenta el valor que deben retornar:

// Que compare 2 Strings y retorne un valor true.

// let nombre = "Maria";
// let apellido = "Perez";

// console.log(nombre === "Maria" && apellido === "Perez");

// Que compare 2 Strings y devuelva false.

// console.log(nombre === "Maria" && apellido === "Montes");

// Que involucre un String y un Número y retorne false.

// let numero1 = 1;
// let numero2 = "1";

// console.log(numero1 === numero2);

// Que involucre un String y un Número y retorne true.

// console.log(numero1 == numero2);

//Ejercicio 3: Mis primeros condicionales

//Escribir una sentencia if que siempre ejecute su bloque de código.

// if(true){
//     console.log(`El bloque se ejecutará siempre porque la condición es TRUE`);
// }

//Escribir una sentencia if que nunca ejecute su bloque de código.

// if(false){
//     console.log(`El bloque no se ejecutará siempre porque la condición es FALSE`);
// }

//Escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste", le deje un mensaje de aliento en la consola.

// let respuesta = prompt("Cómo estás?");

// if(respuesta.toLowerCase() === "triste"){

//     console.log("Vamos! Arriba el ánimo");
// }else{

//     console.log("Que bueno");
// }

//Escribir una sentencia que le pregunte al usuario cuál es el número secreto. ⚠️ Importante: Solamente deberás advertirle con un mensaje en caso de que esté equivocado.

// let secretNum = 7;

// let enteredNum = parseInt(prompt("¿Cuál es el número secreto?"));

// if(enteredNum !== secretNum){
//     console.log("El número ingresado es incorrecto");
// }

//Pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirigilo usando esta línea de código:  window.location = "http://www.google.com"

// let pass = "123";

// let enteredPass = prompt("Ingrese una contraseña");

// if(enteredPass === pass){
//     window.location = "http://www.google.com";
// }else{
//     console.log("La contraseña es incorrecta");
// }

//---------------------------------------EJERCICIO 3----------------------------------------------------------
// Par o Impar
// Pedile al usuario que ingrese un número para que tu programa evalúe si es par o impar. Usá la estructura condicional if...else.

// let number = parseInt(prompt("Ingrese un número"));

// if(number % 2 === 0){

//     alert("El número ingresado es par");

// }else{
//     alert("El número ingresado es impar");
// }

//---------------------------------------EJERCICIO 4----------------------------------------------------------

// let edad = prompt("Ingrese su edad.");

// if (edad < 0) {
//   alert("Error, su edad no es válida.");
// } else if (edad < 18) {
//   alert("No puede pasar al bar.");
// } else if (edad == 21) {
//   alert("Bienvenido y felicitaciones por haber llegado a la mayoría de edad.");
// } else if (edad < 21) {
//   alert("Puede pasar al bar, pero no puede tomar alcohol.");
// } else {
//   alert("Puede pasar al bar y tomar alcohol.");
// }

// if (edad % 2 !== 0) {
//   alert("¿Sabías que tu edad es impar?");
// }



//---------------------------------------EJERCICIO 5----------------------------------------------------------
//Adiviná el número

// let numeroSecreto = 9;

// let numeroIngresado = Number(prompt("Cuál es el número secreto?"));

// if(numeroIngresado === numeroSecreto){

    
// alert("Adivinó el número");

// }else if(numeroIngresado < numeroSecreto){
//     alert("No adivinó el número. El número secreto es mayor");
// }else{
//     alert("No adivinó el número. El número secreto es menor");

// }


//---------------------------------------EJERCICIO 6----------------------------------------------------------
//¿Puedo jubilarme?

let edadJubilatoriaMujer = 60;
let edadJubilatoriaHombre = 65;
let edadIngresada = Number(prompt("Ingrese su edad"));

let sexo = prompt("Indique si es hombre o mujer").toLowerCase();



if((sexo === "mujer") && (edadIngresada >= edadJubilatoriaMujer)){

    alert("Usted señora puede jubilarse");
}else if((sexo === "hombre") && (edadIngresada >= edadJubilatoriaHombre)){

    alert("Usted señor puede jubilarse");
}else if((sexo === "mujer") && edadIngresada < edadJubilatoriaMujer ){
    alert("Usted señora NO puede jubilarse. Espere a envejecer un poco más");
}else {
    alert("Usted señor NO puede jubilarse. Espere a envejecer un poco más");
}
