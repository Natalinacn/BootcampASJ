
// ----------------------------------------EJERCICIO PIRAMIDE----------------------------------------

let altura = prompt("Ingrese el número de altura que desea para la pirámide");

//Primer for para armar la pirámide

//For que marca las filas
for(let i = 1; i <= altura; i++){

    let asteriscos = " ";

    //For que marca las columnas e imprime los *
    for(let j = 1; j <= i; j++){

        asteriscos += "*";

    }

    console.log(asteriscos);

}


//Segundo for para armar la pirámide al revés con el decremento

//For que marca las filas
for(let i = altura -1; i >= 1; i--){

    let asteriscos = " ";

    //For que marca las columnas e imprime los *
    for(let j = 1; j <= i; j++){

        asteriscos += "*";

    }

    console.log(asteriscos);

}



// ----------------------------------------EJERCICIO FACTORIAL----------------------------------------


// let num = parseInt(prompt("Ingrese un número"));

// let factorial = 1;


// for (let i = 1; i <= num; i++) {

//     factorial = factorial * i;
  
    
// }

// console.log("El factorial de " + num + " es " + factorial);




