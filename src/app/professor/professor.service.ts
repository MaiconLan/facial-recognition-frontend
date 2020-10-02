import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AlunoFiltro} from '../aluno/aluno.service';

export class ProfessorFiltro {
  nome: string;
  email: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url = 'http://localhost:8080/professor';

  constructor(private http: HttpClient) { }

  consultar(filtro: ProfessorFiltro): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic ' + btoa('admin:admin'));
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.email) {
      params = params.set('email', filtro.email);
    }

    return this.http.get(this.url, {headers, params}).toPromise().then(response => response);
  }
}
