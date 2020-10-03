import {Component, OnInit} from '@angular/core';
import {Aluno} from '../../core/model';
import {NgForm} from '@angular/forms';
import {AlunoService} from '../aluno.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno = new Aluno();

  status = [
    {label: 'Ativo', value: true},
    {label: 'Inativo', value: false},
  ];

  constructor(private alunoService: AlunoService,
              private messageService: MessageService,
              private rout: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.rout.snapshot.params.id;

    if (id) {
      this.buscar(id);
    }
  }

  editando(): boolean {
    return Boolean(this.aluno.idAluno);
  }

  buscar(id: number): void {
    this.alunoService.buscar(id)
      .then(response => {
        this.aluno = response;
      }).catch(error => {
        console.log(error);
        this.addError('Erro ao buscar', error.error.mensagemUsuario);
    });
  }

  salvar(form: NgForm): void {
    if (this.editando()) {
      this.criar(form);
    } else {
      this.atualizar();
    }
  }

  criar(form: NgForm): void {
    this.alunoService.atualizar(this.aluno).then(() => {
      this.addSuccess('Atualizado', 'Registro atualizado com sucesso');
      form.reset();
      this.aluno = new Aluno();
    }).catch(error => {
      this.addError('Erro ao atualizar', error.error.mensagemUsuario);
    });
  }

  atualizar(): void {
    this.alunoService.salvar(this.aluno).then(response => {
      this.addSuccess('Salvo', 'Registro salvo com sucesso');
      this.aluno = response;
    }).catch(error => {
      this.addError('Erro ao salvar', error.error.mensagemUsuario);
    });
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }

  addError(title: string, message: string): void {
    this.messageService.add({severity: 'error', summary: title, detail: message, life: 3000});
  }
}

