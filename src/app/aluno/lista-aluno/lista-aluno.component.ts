import {Component} from '@angular/core';
import {AlunoFiltro, AlunoService} from '../aluno.service';
import {LazyLoadEvent, MessageService} from 'primeng/api';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent {

  loading = false;
  totalRegistros = 0;

  filtro = new AlunoFiltro();

  alunos = [];

  constructor(private alunoService: AlunoService,
              private messageService: MessageService) {
  }

  consultar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.loading = true;
    this.alunoService.consultar(this.filtro)
      .then(response => {
        if (!response) {
          this.cleanList();
        } else {
          this.totalRegistros = response.totalElements;
          this.alunos = response.content;
        }
      }).catch(error => {
      this.addError('Erro', error.error.mensagemUsuario);
      this.cleanList();
    });

    this.loading = false;
  }

  private cleanList(): void {
    this.totalRegistros = 0;
    this.alunos = [];
  }

  aoMudarPagina(event: LazyLoadEvent): void {
    const pagina = event.first / event.rows;
    this.consultar(pagina);
  }

  excluir(aluno: any): void {
    this.loading = true;
    this.alunoService.excluir(aluno.idAluno).then(() => {
      this.consultar(this.filtro.pagina);
      this.addSuccess('Sucesso', 'Registro excluído com sucesso');
    }).catch(error => {
      this.addError('Erro', error.error.mensagemUsuario);
    });
    this.loading = false;
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }

  addError(title: string, message: string): void {
    this.messageService.add({severity: 'error', summary: title, detail: message, life: 3000});
  }

}
