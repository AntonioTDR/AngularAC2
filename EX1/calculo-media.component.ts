import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-media',
  templateUrl: './calculo-media.component.html',
  styleUrls: ['./calculo-media.component.css']
})
export class CalculoMediaComponent implements OnInit{
  ac1: number;
  ac2: number;
  ag: number;
  af: number;
  media: number;
  resultado: string;

  contructor(){}
  
  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
