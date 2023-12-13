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
