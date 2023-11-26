import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  cantidad: number = 0;
  precio: number = 0;   
  total: number = 0;    

  calcularDescuento() {
    this.total = this.cantidad * this.precio;


    if (this.total > 200) {
      const descuento = this.precio * 0.2;
      this.total = this.total - descuento;
    }
  }
}
