import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrls: ['./formulario-aluno.component.css']
})
export class FormularioAlunoComponent implements OnInit{
  ra: string;
  nome: string;
  email: string;
  celular: string;

  contructor(){}
  
  salvar() {
    console.log('Dados salvos:', { ra: this.ra, nome: this.nome, email: this.email, celular: this.celular });
  }
}
