import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Aluno} from '../core/model';

export class AlunoFiltro {
  nome: string;
  email: string;
  matricula: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = 'http://localhost:8080/aluno';

  constructor(private http: HttpClient) {
  }

  consultar(filtro: AlunoFiltro): Promise<any> {
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
    if (filtro.matricula) {
      params = params.set('matricula', filtro.matricula);
    }

    return this.http.get(this.url, {headers, params})
      .toPromise()
      .then(response => response)
      .catch(error => {
        return Promise.reject('Erro ao consultar alunos');
      });
  }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders().append('Authorization', 'Basic ' + btoa('admin:admin'));

    return this.http.delete(`${this.url}/${id}`, {headers})
      .toPromise()
      .then(() => null)
      .catch(error => {
        return Promise.reject(error);
      });
  }

  salvar(aluno: Aluno): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic ' + btoa('admin:admin'))
      .append('Content-Type', 'application/json');

    return this.http.post(`${this.url}`, JSON.stringify(aluno), {headers})
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
