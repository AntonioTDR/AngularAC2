import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit{
  numero1: number;
  numero2: number;
  operacao: string;
  resultado: number;

  contructor(){}
  
  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        this.resultado = null;
        break;
    }
  }
}
