import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }


  public obtenerDataApi(){
      return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  // public obtenerDataPorId(id:number){
  //   return this.http.get('https://rickandmortyapi.com/api/character/'+id);

  // }


}
