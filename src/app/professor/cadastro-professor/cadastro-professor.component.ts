import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProfessorService} from '../professor.service';
import {Professor} from '../../core/model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

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
              private rout: ActivatedRoute) {
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

  salvar(form: NgForm): void {
    if (this.editando()) {
      this.criar(form);
    } else {
      this.atualizar(form);
    }
  }

  criar(form: NgForm): void {
    this.professorService.atualizar(this.professor).then(() => {
      this.addSuccess('Atualizado', 'Registro atualizado com sucesso');
      form.reset();
      this.professor = new Professor();
    }).catch(error => {
      this.addError('Erro ao atualizar', error.error.mensagemUsuario);
    });
  }

  atualizar(): void {
    this.professorService.salvar(this.professor).then(response => {
      this.addSuccess('Salvo', 'Registro salvo com sucesso');
      this.professor = response;
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
