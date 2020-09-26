import { Component, OnInit } from '@angular/core';
import {AlunoService} from '../aluno.service';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  loading: boolean;
  error: boolean;
  errorMessage: string;
  nome: string;

  alunos = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
  }

  consultar(): void {
    this.loading = true;
    this.alunoService.consultar({nome: this.nome})
      .then(alunos => {
      this.alunos = alunos;
    }).catch(error => {
      this.errorMessage = error;
    });

    this.loading = false;
  }

}
