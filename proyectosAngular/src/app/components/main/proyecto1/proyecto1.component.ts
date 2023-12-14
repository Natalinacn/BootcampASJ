import { NgClass, getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})
export class Proyecto1Component {

  valor_input = "";

  //Creo un Array de objetos que se va a recorrer en el listado del html

  tareas : {descripcion: string, fecha: Date, estado: boolean}[] = [];

  filtro!: string; //NUEVO

tareasCompletadas: {descripcion: string, fecha: Date, estado: boolean}[] = [];
tareasIncompletas: {descripcion: string, fecha: Date, estado: boolean}[] = [];


agregarTarea(){

  this.tareas.push({descripcion: this.valor_input, fecha: new Date(), estado: false});
  this.cambiarFiltro();

}


mostrarTodas(){
  this.tareas;
}


filtrarTareasCompletadas() {
  this.tareasCompletadas = this.tareas.filter(tareas => tareas.estado === true);
}

filtrarTareasIncompletas(){
  this.tareasIncompletas = this.tareas.filter(tareas => tareas.estado === false);
}



// cambiarFiltro(){ //NUEVO



tareasFiltradas: {descripcion: string, fecha: Date, estado: boolean}[] = [];

cambiarFiltro() {
  switch (this.filtro) {
    case 'eliminados':
      this.filtrarTareasCompletadas();
      this.tareasFiltradas = this.tareasCompletadas;
      break;
    case 'finalizados':
      this.filtrarTareasIncompletas();
      this.tareasFiltradas = this.tareasIncompletas;
      break;
    default:
      this.tareasFiltradas = this.tareas;
  }
}



setearFiltro(filtro: string){
  this.filtro = filtro;
  this.cambiarFiltro();
}
}
