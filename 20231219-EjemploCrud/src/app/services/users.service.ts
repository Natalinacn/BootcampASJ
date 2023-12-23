import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Importa libreria de observable

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://reqres.in/api/users'; //Pongo la web de la api de la que voy a traer los datos. 

  datosUsuario: any ={
    id: -1,
    name: '',
    job: '',
  };


  // Observables: Evento que se queda aguardando una respuesta. A se suscribe al newletter de B Observable  y espera una respuesta de B. Cuando B tenga respuesta se la va a devolver a los que estén suscriptos
  // Es asincronico y esta observando al evento al que estoy suscripto


  //Get a Usuarios
  public getUsers():Observable<any>{ //Le ponemos implicitamente que es de tipo observable
    return this.http.get(this.URL_API); //Esto retorna un observable
  }

//Post Usuario
public createUser(usuario:any): Observable<any>{
  return this.http.post(this.URL_API, usuario); //Le envio a la url todo el contenido de usuario que es el form.value

}

//DELETE usuario

public deleteUser(id:any):Observable<any>{
  return this.http.delete(this.URL_API + '/' + id);

}

//Put usuario

public updateUser(usuario:any): Observable<any>{
  return this.http.put(this.URL_API  + '/' + this.datosUsuario.id, usuario);

}
}
