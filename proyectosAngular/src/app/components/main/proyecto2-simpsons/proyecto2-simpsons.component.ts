import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto2-simpsons',
  templateUrl: './proyecto2-simpsons.component.html',
  styleUrls: ['./proyecto2-simpsons.component.css']
})
export class Proyecto2SimpsonsComponent {

//Hago un array porque quiero guardar acá el contenido de los inputs.
  personajes: { inputImagen: string;  inputNombre: string;  inputProfesion: string}[ ] = [ ];

//Traigo los datos de los inputs con el ngModel
  inputImagen: string = "";
  inputNombre: string = "";
  inputProfesion: string = "";


  //Hago el metodo para agregar cada input a la tabla

  agregarATabla(){

    const nuevoPersonaje = {
    inputImagen:  this.inputImagen,
    inputNombre: this.inputNombre,
    inputProfesion: this.inputProfesion,
  };

  //Agrego el personaje al array
    this.personajes.push(nuevoPersonaje);

    this.inputImagen = "";
    this.inputNombre = "";
    this.inputProfesion= "";

  }



}
