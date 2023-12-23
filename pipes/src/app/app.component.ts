import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Natalin';
  apellido = 'aCuñA'
  total = 34.35;
  fecha = new Date();
  lorem = "jahjahdkahdkajhkadhkajshdksajdh"

  objeto = {
    nombre: this.nombre,
    apellido: this.apellido,
    total: this.total,
    fecha: this.fecha,
    lorem: this.lorem
  }
}
