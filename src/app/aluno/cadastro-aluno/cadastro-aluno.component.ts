import {Component, OnInit} from '@angular/core';
import {Aluno} from '../../core/model';
import {NgForm} from '@angular/forms';
import {AlunoService} from '../aluno.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {ErrorHandlerService} from '../../core/error-handler.service';


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
              private rout: ActivatedRoute,
              private router: Router,
              private title: Title,
              private handler: ErrorHandlerService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de alunos');
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
        this.title.setTitle('Edição de alunos');
      }).catch(error => {
      this.handler.handle(error);
    });
  }

  salvar(): void {
    if (this.editando()) {
      this.atualizar();
    } else {
      this.criar();
    }
  }

  criar(): void {
    this.alunoService.criar(this.aluno).then(aluno => {
      this.addSuccess('Criado', 'Registro criado com sucesso');
      this.router.navigate(['/aluno', aluno.idAluno]);
    }).catch(error => {
      this.handler.handle(error);
    });
  }

  atualizar(): void {
    this.alunoService.atualizar(this.aluno).then(response => {
      this.addSuccess('Atualizado', 'Registro atualizado com sucesso');
      this.aluno = response;
    }).catch(error => {
      this.handler.handle(error);
    });
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }

  novo(form: NgForm): void {
    form.reset();

    setTimeout(function(): void {
      this.aluno = new Aluno();
    }.bind(this), 1);

    this.router.navigate(['/aluno/novo']);
  }
}

