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
    console.log(this.rout.snapshot.params.id);
  }

  salvar(form: NgForm): void {
    this.professorService.salvar(this.professor).then(() => {
      this.addSuccess('Salvo', 'Registro salvo com sucesso');
      form.reset();
      this.professor = new Professor();
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
