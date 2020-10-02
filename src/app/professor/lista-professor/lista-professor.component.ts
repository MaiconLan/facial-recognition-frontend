import {Component} from '@angular/core';
import {ProfessorFiltro, ProfessorService} from '../professor.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent {

  loading = false;
  error: boolean;
  errorMessage: string;
  totalRegistros = 0;

  filtro = new ProfessorFiltro();

  professores = [];

  constructor(private professorService: ProfessorService) {
  }

  async load(): Promise<void> {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 500));
    this.consultar();
    this.loading = false;
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
      this.errorMessage = error;
      this.cleanList();
    });

    this.loading = false;
  }

  private cleanList(): void {
    this.totalRegistros = 0;
    this.professores = [];
  }


  aoMudarPagina(event: LazyLoadEvent): void {
    const pagina = event.first / event.rows;
    this.consultar(pagina);
  }

}
