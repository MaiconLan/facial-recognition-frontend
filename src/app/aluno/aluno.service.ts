import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export interface AlunoFiltro {
  nome: string;
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

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(this.url, {headers, params}).toPromise().then(response => response);
  }

}
