import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareasModel } from '../model/tareasModel';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private urlList = "http://localhost:8080/tarea/listado";

  private urlCreate = "http://localhost:8080/tarea/crear";

  private urlDelete = "http://localhost:8080/tarea";

  private urlUpdate = "http://localhost:8080/tarea";
  
  constructor(
    private clienteHttp: HttpClient
  ) { }

  getTareas(): Observable<TareasModel[]>{
    return this.clienteHttp.get<TareasModel[]>(this.urlList);

  }

  createTarea(tarea: TareasModel): Observable<TareasModel>{
    return this.clienteHttp.post<TareasModel>(this.urlCreate, tarea);
  }


  deleteTarea(id:number): Observable<void>{
    return this.clienteHttp.delete<void>(this.urlDelete + '/' + id);
  }

  updateTarea(tarea: TareasModel, id:number): Observable<TareasModel>{
    return this.clienteHttp.put<TareasModel>(this.urlUpdate + '/' + id, tarea);
  }

  



}

