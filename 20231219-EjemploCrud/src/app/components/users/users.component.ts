import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(public userService: UsersService){}
  
  usuarios: any = [];
  
  
  ngOnInit(): void {

    this.list();


  }

  resetForm(form: NgForm){
    form.reset();
    this.userService.datosUsuario = {
      id: -1,
    }
  }


      
    //LISTADO DE USUARIOS
    //Lo suscribimos al método getUsers que es observable
    list(){this.userService.getUsers().subscribe((res)=>{
      console.log('Respuesta del get' + res); //Imprimimos la respuesta que nos devuelve el observable
      this.usuarios = res.data;
    });
  }

  //NUEVO USUARIO
  create(form: NgForm){ //Recibe un parametro del tipo NgForm

    if(form.value.id != -1){
      this.userService.updateUser(form.value).subscribe((res) =>{
        console.log("Respuesta del PUT" + res);
        form.reset();
        this.list();
      });

    }else{    
    //validacion de datos capturados en el formulario
    if(!form.valid){
      console.log("Formulario invalido");
      return;
    }else{
      const usu = {
      name: form.value.name,
      job: form.value.job,
    };
    this.userService.createUser(form.value).subscribe((res) => console.log(res));
    form.reset(); //Limpia los inputs del formulario
    this.list; //Con esto cada vez que guarda uno vuelve a ejecutar la lista. Igualmente falta pushear para que se actualice
  }
}
    }


//ELIMINAR USUARIO
delete(id:any){
  let confirmacion = confirm('Desea eliminar el usuario #'+id + '?'); //Con confirm puedo cancelar la accion
  if(confirmacion){
    this.userService.deleteUser(id).subscribe((res)=>{console.log("Respuesta de eliminar", res)});
    this.list; //Paso esta lista para que se vuelva a actualizar con el eliminado
  }
}

//Actualizar usuario: Recibe un usuario
update(usu:any){
  this.userService.datosUsuario = {
    id: usu.id,
    name: usu.first_name,
    job: "Astrofisico"
  }

}

}
