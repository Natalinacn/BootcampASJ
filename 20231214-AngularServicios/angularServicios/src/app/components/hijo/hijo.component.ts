//Agrego el Input (es una entrada de datos, le estamos diciendo que puede recibir datos), en este caso del padre al hijo. El input es para recibir el dato del padre. Le avisa al hijo que va a recibir informacion desde un atributo del padre , en este caso llamado "datoEnviado"
//Con Output y EventEmitter saco datos

import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  // Declarar una variable que recibe el dato enviado por el padre
  @Input() datoEnviado: any = {};
  @Input() otro: string = '';

  //Crear una variable que vamos a enviar a padre. COn el EventEmitter le aviso que le voy a mandar un string en este caso
  @Output() mensaje: EventEmitter<string>;

  //Inicializamos el mensaje
  constructor(){
    this.mensaje = new EventEmitter
  }

  enviarMsj(){
    this.mensaje.emit("Hola viejo");
  }

}
