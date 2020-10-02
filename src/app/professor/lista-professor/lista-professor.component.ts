import {Component} from '@angular/core';
import {ProfessorFiltro, ProfessorService} from '../professor.service';
import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent {

  loading = false;
  totalRegistros = 0;

  filtro = new ProfessorFiltro();

  professores = [];

  constructor(private professorService: ProfessorService,
              private messageService: MessageService,
              private confirmation: ConfirmationService) {
  }

  consultar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.loading = true;
    this.professorService.consultar(this.filtro)
      .then(response => {
        if (!response) {
          this.cleanList();
        } else {
          this.totalRegistros = response.totalElements;
          this.professores = response.content;
        }
      }).catch(error => {
      this.addError('Erro', error.error.mensagemUsuario);
      this.cleanList();
    });

    this.loading = false;
  }

  private cleanList(): void {
    this.totalRegistros = 0;
    this.professores = [];
  }

  confirmarExclusao(professor: any): void {
    this.confirmation.confirm({
      icon: 'pi pi-info-circle',
      header: 'Confirmar exclusão!',
      message: 'Você tem certeza de que deseja excluir?',
      accept: () => {
        this.excluir(professor);
      },
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-info p-button-rounded',
      rejectButtonStyleClass: 'botao-excluir p-button-danger p-button-rounded'
    });
  }

  excluir(professor: any): void {
    this.loading = true;
    this.professorService.excluir(professor.idProfessor).then(() => {
      this.consultar(this.filtro.pagina);
      this.addSuccess('Sucesso', 'Registro excluído com sucesso');
    }).catch(error => {
      this.addError('Erro', error.error.mensagemUsuario);;
    });
    this.loading = false;
  }

  aoMudarPagina(event: LazyLoadEvent): void {
    const pagina = event.first / event.rows;
    this.consultar(pagina);
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }

  addError(title: string, message: string): void {
    this.messageService.add({severity: 'error', summary: title, detail: message, life: 3000});
  }

}
