import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent implements OnInit {

  loading: boolean;

  professores = [];

  constructor() { }

  ngOnInit(): void {
  }

  async load(): Promise<void> {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 500));
    this.buscarProfessores();
    this.loading = false;
  }

  buscarProfessores(): void{
    this.professores = [{ idProfessor: 1, idUsuario: 1, nome: 'Maicon Lanzendorf',  usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idProfessor: 2, idUsuario: 2, nome: 'Maicon Lanzendorf',  usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idProfessor: 3, idUsuario: 3, nome: 'Maicon Lanzendorf',  usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idProfessor: 4, idUsuario: 4, nome: 'Maicon Lanzendorf',  usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idProfessor: 5, idUsuario: 5, nome: 'Maicon Lanzendorf',  usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idProfessor: 6, idUsuario: 6, nome: 'Maicon Lanzendorf',  usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'},
      { idProfessor: 7, idUsuario: 7, nome: 'Maicon Lanzendorf', matricula: '123456', usuario: 'maicon.lanzendorf', senha: 'senha', email: 'email'}];
  }

}
