import { NgClass, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TareasModel } from 'src/app/model/tareasModel';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css'],
})
export class Proyecto1Component implements OnInit {
  tareas: TareasModel[] = [];
  valor_input = '';

  tareasModel: TareasModel = {
    id: 0,
    nombre: '',
    fecha: new Date(),
    estado: false,
  };

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.todoListService.getTareas().subscribe(
      (tareasObtenidas: TareasModel[]) => {
        this.tareas = tareasObtenidas;
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }

  agregarTarea(form: NgForm) {
    this.todoListService.createTarea(this.tareasModel).subscribe((result) => {
      alert('Producto agregado correctamente');
      this.getTareas();
      form.reset();
    });
  }

  borrarTarea(id: number) {
    this.todoListService.deleteTarea(id).subscribe(() => {
      this.getTareas();
    });
  }

  actualizarTarea(id: number, tarea: TareasModel) {
    const nombreActualizado = prompt('Ingrese el nuevo nombre');
    if (nombreActualizado) {
      tarea.nombre = nombreActualizado;
      tarea.estado = true;
      this.todoListService.updateTarea(tarea, id).subscribe(() => {
        this.getTareas();
      });
    }
  }

  //valor_input = '';

  //   //Creo un Array de objetos que se va a recorrer en el listado del html

  //   tareas : {descripcion: string, fecha: Date, estado: boolean}[] = [];

  //   filtro!: string; //NUEVO

  // tareasCompletadas: {descripcion: string, fecha: Date, estado: boolean}[] = [];
  // tareasIncompletas: {descripcion: string, fecha: Date, estado: boolean}[] = [];

  // agregarTarea(){

  //   this.tareas.push({descripcion: this.valor_input, fecha: new Date(), estado: false});
  //   this.cambiarFiltro();

  // }

  // mostrarTodas(){
  //   this.tareas;
  // }

  // filtrarTareasCompletadas() {
  //   this.tareasCompletadas = this.tareas.filter(tareas => tareas.estado === true);
  // }

  // filtrarTareasIncompletas(){
  //   this.tareasIncompletas = this.tareas.filter(tareas => tareas.estado === false);
  // }

  // // cambiarFiltro(){ //NUEVO

  // tareasFiltradas: {descripcion: string, fecha: Date, estado: boolean}[] = [];

  // cambiarFiltro() {
  //   switch (this.filtro) {
  //     case 'eliminados':
  //       this.filtrarTareasCompletadas();
  //       this.tareasFiltradas = this.tareasCompletadas;
  //       break;
  //     case 'finalizados':
  //       this.filtrarTareasIncompletas();
  //       this.tareasFiltradas = this.tareasIncompletas;
  //       break;
  //     default:
  //       this.tareasFiltradas = this.tareas;
  //   }
  // }

  // setearFiltro(filtro: string){
  //   this.filtro = filtro;
  //   this.cambiarFiltro();
  // }
}
