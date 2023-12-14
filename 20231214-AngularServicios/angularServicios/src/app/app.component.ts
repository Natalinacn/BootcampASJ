import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titulo del padre';

  msjContenido: string = "";

  recibirMsj(msj:string){
    this.msjContenido = msj;
  }


  //Esto corresponde a la linea 17 del app.component
  contenidoInput = '';
  mostrar(txt: string){
    this.contenidoInput = txt;

  }

    //Esto corresponde a la linea 24 del app.component. SOlo se hace asi con el NGMODEL. Luego recordar agregar en el app.module.ts la importacion import { FormsModule } from '@angular/forms'; y agregar FormsModule abajo en imports.

  dato: string = "";

}
