document.addEventListener("DOMContentLoaded", function () {
  //Capturo los elementos: el boton Agregar al carrito y el input donde agrega productos

  const input_add = document.getElementById("input_add");

  const btn_Add = document.getElementById("btn_add");

  const filas = document.getElementById("filas-carrito");

  let carrito = [];

  //Le paso el parámetro click y la funcion la armo aparte y se la paso. AL hacer click ya tendria el objeto productoCarrito

  if (btn_Add) {
    btn_Add.addEventListener("click", addToCart);
  }

  //FUNCIONES

  function addToCart() {
    //Cómo obtener el valor del input? Con el value

    const cantProd = parseInt(input_add.value); //Acá cada vez que pongo un valor nuevo y hago click en el boton ADD me captura el value

    const nombreProd = document.querySelector(".titulo h2").textContent; //Capturo el titulo

    const precioProdText = document.querySelector(".titulo p").textContent; //Capturo el precio en formato texto

    const precioProdNum = parseFloat(precioProdText.replace("$", "")); //Paso el precio a número y elimino el $

    //Me armo un objeto del producto. Ya saco el subtotal con el precio del producto y la cantidad

    const productoCarrito = {
      nombre: nombreProd,
      precio: precioProdNum,
      cantidad: cantProd,
      subtotal: precioProdNum * cantProd,
    };

    //Una vez que tengo el objeto lo tengo que guardar en localStorage para despues mostrarlo en la vista del carrito

    const carritoGuardado = localStorage.getItem("carrito"); //Acá obtengo el carrito guardado en el LocalStorage

    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
    }

    carrito.push(productoCarrito);

    //Acá actualizo el localStorage
    carrito = localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarTablaCarrito();

    console.log(filas);
  }

  function actualizarTablaCarrito() {
    //Actualizo la tabla con los datos del carrito. Primero selecciono la tabla con el querySelector o id.
    //Despues con innerHTML limpio el contenido de la tabla para poder actualizarla

    const tablaCarrito = document.querySelector("#filas-carrito");
    tablaCarrito.innerHTML = "";

    //Recorro el carrito para poder ir cargando cada fila

    carrito.forEach((producto) => {
      const fila = document.createElement("tr");

      // Creo las celdas de la fila con createElement
      const nombreCel = document.createElement("td");
      nombreCel.textContent = producto.nombre;

      const precioCel = document.createElement("td");
      precioCel.textContent = `$${producto.precio.toFixed(2)}`;

      const cantidadCel = document.createElement("td");
      cantidadCel.textContent = producto.cantidad;

      const subtotalCel = document.createElement("td");
      subtotalCel.textContent = `$${producto.subtotal.toFixed(2)}`;

      const eliminarCel = document.createElement("td");
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        // Aquí puedes agregar lógica para eliminar el producto del carrito
        // y luego volver a renderizar la tabla
      });
      eliminarCel.appendChild(btnEliminar);

      // Agrego las celdas a la fila
      fila.appendChild(nombreCel);
      fila.appendChild(precioCel);
      fila.appendChild(cantidadCel);
      fila.appendChild(subtotalCel);
      fila.appendChild(eliminarCel);

      // Agrego la fila al cuerpo de la tabla
      tablaCarrito.appendChild(fila);
    });
  }
});
