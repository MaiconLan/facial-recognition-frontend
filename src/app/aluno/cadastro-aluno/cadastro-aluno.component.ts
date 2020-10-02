import {Component} from '@angular/core';
import {Aluno} from '../../core/model';
import {NgForm} from '@angular/forms';
import {AlunoService} from '../aluno.service';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {

  constructor(private alunoService: AlunoService,
              private messageService: MessageService,
              private confirmation: ConfirmationService) { }

  aluno = new Aluno();

  status = [
    {label: 'Ativo', value: true},
    {label: 'Inativo', value: false},
  ];

  salvar(form: NgForm): void {
    this.alunoService.salvar(this.aluno).then(() => {
      this.addSuccess('Salvo', 'Registro salvo com sucesso');
      form.reset();
      this.aluno = new Aluno();
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

