import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  loading: boolean;

  alunos = [];

  constructor() { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  async load(): Promise<void> {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 500));
    this.buscarAlunos();
    this.loading = false;
  }

  buscarAlunos(): void{
    this.alunos = [{ idAluno: 1, idUsuario: 1, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idAluno: 2, idUsuario: 2, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idAluno: 3, idUsuario: 3, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idAluno: 4, idUsuario: 4, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idAluno: 5, idUsuario: 5, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idAluno: 6, idUsuario: 6, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idAluno: 7, idUsuario: 7, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'}];
  }

}
