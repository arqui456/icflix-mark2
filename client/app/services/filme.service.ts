import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmeService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getFilmes(): Observable<any> {
    return this.http.get('/api/filmes').map(res => res.json());
  }

  countFilmes(): Observable<any> {
    return this.http.get('/api/filmes/count').map(res => res.json());
  }

  addFilme(filme): Observable<any> {
    return this.http.post('/api/filme', JSON.stringify(filme), this.options);
  }

  getFilme(filme): Observable<any> {
    return this.http.get(`/api/filme/${filme._id}`).map(res => res.json());
  }

  editFilme(filme): Observable<any> {
    return this.http.put(`/api/filme/${filme._id}`, JSON.stringify(filme), this.options);
  }

  deleteFilme(filme): Observable<any> {
    return this.http.delete(`/api/filme/${filme._id}`, this.options);
  }

  getCategorias(): Observable<any> {
    return this.http.get('/api/categorias').map(res => res.json());
  }

  countCategoria(): Observable<any> {
    return this.http.get('/api/categorias/count').map(res => res.json());
  }

  addCategoria(categoria): Observable<any> {
    return this.http.post('/api/categoria', JSON.stringify(categoria), this.options);
  }

  getCategoria(categoria): Observable<any> {
    return this.http.get(`/api/categoria/${categoria._id}`).map(res => res.json());
  }

  editCategoria(categoria): Observable<any> {
    return this.http.put(`/api/categoria/${categoria._id}`, JSON.stringify(categoria), this.options);
  }

  deleteCategoria(categoria): Observable<any> {
    return this.http.delete(`/api/categoria/${categoria._id}`, this.options);
  }

}
