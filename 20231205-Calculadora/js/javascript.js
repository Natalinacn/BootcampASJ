// HTML

// <button id="1" onClick="mi_funcion(this.id)">1</button>

// <button id="2" onClick="mi_funcion(this.id)">2 </button>

// JS

//  function mi_funcion(elemento) {
//             console.log("ID de Boton = " + elemento);
//   }



let botones = document.getElementsByClassName("number_btn");


let resultado = document.getElementById("resultado");


for(let boton of botones){
    boton.addEventListener("click", function(){
        
    })
}
