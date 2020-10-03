import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProfessorService} from '../professor.service';
import {Professor} from '../../core/model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  professor = new Professor();

  status = [
    {label: 'Ativo', value: true},
    {label: 'Inativo', value: false},
  ];

  constructor(private professorService: ProfessorService,
              private messageService: MessageService,
              private rout: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.rout.snapshot.params.id;

    if (id) {
      this.buscar(id);
    }
  }

  buscar(id: number): void {
    this.professorService.buscar(id)
      .then(response => {
        this.professor = response;
      }).catch(error => {
      console.log(error);
      this.addError('Erro ao buscar', error.error.mensagemUsuario);
    });
  }

  editando(): boolean {
    return Boolean(this.professor.idProfessor);
  }

  salvar(): void {
    if (this.editando()) {
      this.atualizar();
    } else {
      this.criar();
    }
  }

  criar(): void {
    this.professorService.criar(this.professor).then(professor => {
      this.addSuccess('Criado', 'Registro criado com sucesso');
      this.router.navigate(['/professor', professor.idProfessor]);
    }).catch(error => {
      this.addError('Erro ao criar', error.error.mensagemUsuario);
    });
  }

  atualizar(): void {
    this.professorService.atualizar(this.professor).then(response => {
      this.addSuccess('Atualizado', 'Registro atualizado com sucesso');
      this.professor = response;
    }).catch(error => {
      this.addError('Erro ao atualizar', error.error.mensagemUsuario);
    });
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }

  addError(title: string, message: string): void {
    this.messageService.add({severity: 'error', summary: title, detail: message, life: 3000});
  }

  novo(form: NgForm): void {
    form.reset();

    setTimeout(function(): void {
      this.professor = new Professor();
    }.bind(this), 1);

    this.router.navigate(['/aluno/novo']);
  }
}
