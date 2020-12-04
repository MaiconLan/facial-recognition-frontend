import {Component, OnInit} from '@angular/core';
import {TurmaFiltro, TurmaService} from "../../turma/turma.service";
import {ErrorHandlerService} from "../../core/error-handler.service";

export class ExportacaoFiltro {
  idTurma: string;
  formato: string;
}

@Component({
  selector: 'app-exportar-aulas',
  templateUrl: './exportar-aulas.component.html',
  styleUrls: ['./exportar-aulas.component.css']
})
export class ExportarAulasComponent implements OnInit {

  filtro = new ExportacaoFiltro();

  turmas = [{label: 'Selecione', value: null}];
  formatos = [
    {label: 'Selecione', value: null},
    {label: 'PDF', value: 'pdf'},
    {label: 'JSON', value: 'json'},
  ];

  constructor(private turmaService: TurmaService,
              private handler: ErrorHandlerService) {
  }

  ngOnInit(): void {
    this.carregarTurmas();
  }

  carregarTurmas(): void {
    this.turmaService.listar()
      .then(turmas => {
        console.log('turmas: ', turmas);
        for (const t of turmas) {
          console.log('turma: ', t);
          const nome = `${t.materia} - ${t.ano}/${t.periodo}`;
          this.turmas.push({label: nome, value: t.idTurma});
        }
      })
      .catch(error => {
        console.log(error);
        this.handler.handle(error);
      });
  }

  gerarRelatorio(): void {
    this.turmaService.gerarRelatorio(this.filtro);
  }
}
