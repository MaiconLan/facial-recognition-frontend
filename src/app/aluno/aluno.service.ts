import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export class AlunoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 2;
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

    console.log('pagina', filtro.pagina.toString());
    console.log('itensPorPagina', filtro.itensPorPagina.toString());

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(this.url, {headers, params}).toPromise().then(response => response);
  }

}
