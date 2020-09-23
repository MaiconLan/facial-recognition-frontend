import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  usuario = new Usuario();
  result = new Usuario();

  status = [
    {label: 'Ativo', value: true},
    {label: 'Inativo', value: false},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.result = this.usuario;
  }

}

export class Usuario {
  nome: string;
  email: string;
  usuario: string;
  senha: string;
}
