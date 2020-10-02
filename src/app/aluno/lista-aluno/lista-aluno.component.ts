import {Component, OnInit} from '@angular/core';
import {AlunoFiltro, AlunoService} from '../aluno.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  loading = false;
  error: boolean;
  errorMessage: string;
  totalRegistros = 0;

  filtro = new AlunoFiltro();

  alunos = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
  }

  consultar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.loading = true;
    this.alunoService.consultar(this.filtro)
      .then(response => {
        console.log('RESPONSE: ', response);
        if (!response) {
          this.cleanList();
        } else {
          this.totalRegistros = response.totalElements;
          this.alunos = response.content;
        }
    }).catch(error => {
      this.errorMessage = error;
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

}
