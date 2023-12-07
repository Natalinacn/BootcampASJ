let entrada = document.getElementById("entrada");

let entradaFinal= "";

entrada.addEventListener("keyup", function (e) {
  let teclaPresionada = e.key;

  if (
    teclaPresionada === "a" || 
    teclaPresionada === "e" ||
    teclaPresionada === "i" ||
    teclaPresionada === "o" ||
    teclaPresionada === "u"
  ) {
    entradaFinal += "_";
  } else {
    entradaFinal += teclaPresionada;
  }

  if(teclaPresionada == "Backspace"){

    entradaFinal= "";

  }

  entrada.value = entradaFinal;
  console.log(entradaFinal);

});