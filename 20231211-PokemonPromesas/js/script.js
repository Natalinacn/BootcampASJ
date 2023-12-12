let actualizar = document.getElementById("actualizar");
const chisteElement = document.getElementById('chiste');




    function obtenerChiste(){
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data =>{
            chisteElement.textContent = data.value;
        })
        .catch(error => console.log("Error al obtener chiste: ", error));

            }


        actualizar.addEventListener("click", obtenerChiste);

// document.addEventListener('DOMContentLoaded', function () {
//     const chisteElement = document.getElementById('chiste');
//     const actualizarBtn = document.getElementById('actualizarBtn');

//     // Función para obtener un chiste de Chuck Norris
//     function obtenerChiste() {
//         fetch('https://api.chucknorris.io/jokes/random')
//             .then(response => response.json())
//             .then(data => {
//                 // Inserta el chiste en el elemento h2
//                 chisteElement.textContent = data.value;
//             })
//             .catch(error => console.error('Error al obtener chiste:', error));
//     }

//     // Llama a obtenerChiste al cargar la página
//     obtenerChiste();

//     // Agrega un evento click al botón para actualizar el chiste
//     actualizarBtn.addEventListener('click', obtenerChiste);
// });

