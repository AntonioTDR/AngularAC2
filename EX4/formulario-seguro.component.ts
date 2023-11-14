import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-seguro',
  templateUrl: './formulario-seguro.component.html',
  styleUrls: ['./formulario-seguro.component.css']
})
export class FormularioSeguroComponent implements OnInit{
  nomeSegurado: string;
  sexo: string;
  idade: number;
  valorAutomovel: number;
  valorApolice: number;

  contructor(){}
  
  calcularApolice() {
    if (this.sexo === 'masculino') {
      this.valorApolice = this.idade <= 25 ? 0.15 * this.valorAutomovel : 0.10 * this.valorAutomovel;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = 0.08 * this.valorAutomovel;
    }
  }
}
