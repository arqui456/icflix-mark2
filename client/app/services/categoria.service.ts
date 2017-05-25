import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

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
