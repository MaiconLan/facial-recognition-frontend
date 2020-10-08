import { Component, OnInit } from '@angular/core';
import {TurmaFiltro, TurmaService} from "../turma.service";
import {ConfirmationService, LazyLoadEvent} from "primeng/api";
import {ErrorHandlerService} from "../../core/error-handler.service";

@Component({
  selector: 'app-lista-turma',
  templateUrl: './lista-turma.component.html',
  styleUrls: ['./lista-turma.component.css']
})
export class ListaTurmaComponent implements OnInit {

  loading = false;
  totalRegistros = 0;

  filtro = new TurmaFiltro();

  tipos = [
    {label: 'Selecione', value: null},
    {label: 'Bimestral', value: 'BIMESTRAL'},
    {label: 'Trimestral', value: 'TRIMESTRAL'},
    {label: 'Anual', value: 'ANUAL'},
    {label: 'Semestral', value: 'SEMESTRAL'},
  ];

  turmas = [];

  constructor(private turmaService: TurmaService,
              private handler: ErrorHandlerService,
              private confirmation: ConfirmationService) { }

  ngOnInit(): void {
  }

  consultar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.loading = true;
    this.turmaService.consultar(this.filtro)
      .then(response => {
        if (!response) {
          this.cleanList();
        } else {
          this.totalRegistros = response.totalElements;
          this.turmas = response.content;
        }
      }).catch(error => {
      this.handler.handle(error);
      this.cleanList();
    });

    this.loading = false;
  }

  private cleanList(): void {
    this.totalRegistros = 0;
    this.turmas = [];
  }

  aoMudarPagina(event: LazyLoadEvent): void {
    const pagina = event.first / event.rows;
    this.consultar(pagina);
  }

  confirmarExclusao(turma: any): void {
    this.confirmation.confirm({
      icon: 'pi pi-info-circle',
      header: 'Confirmar exclusão!',
      message: 'Você tem certeza de que deseja excluir?',
      accept: () => {
        this.excluir(turma);
      },
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-info p-button-rounded',
      rejectButtonStyleClass: 'botao-excluir p-button-danger p-button-rounded'
    });
  }

  private excluir(turma: any): void {

  }
}
