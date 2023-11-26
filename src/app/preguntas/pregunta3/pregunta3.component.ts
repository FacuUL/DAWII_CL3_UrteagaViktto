import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  montoPrestamo: number = 0;
  cuotas: number = 0;
  montoCuota: number = 0;
  interes: number = 0.10;

  calcularCuotas() {
    if (this.montoPrestamo >= 5000) {
      this.cuotas = 3;
    } else if (this.montoPrestamo <= 1000) {
      this.cuotas = 1;
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

 
    this.interes = this.montoPrestamo < 4000 ? 0.12 : 0.10;
    const montoTotal = this.montoPrestamo * (1 + this.interes);
    this.montoCuota = montoTotal / this.cuotas;
  }
}
