import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductAdapter } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://127.0.0.1:8000/api/Product';

  constructor(
    private http: HttpClient,
    private adapter: ProductAdapter,
  ) { }

  getAll(): Observable<Product[]> {
    const url = `${this.baseUrl}/GetAll`;
    return this.http.get(url).pipe(
      map((data: any[]) => data['data'].map(item => this.adapter.adapt(item))),
    );
  }

  getByID(id): Observable<Product> {
    const url = `${this.baseUrl}/GetByID/` + id;
    return this.http.get(url).pipe(
      map((item: any) => this.adapter.adapt(item['data'])),
    );
  }

  deleteByID(id) {
    const url = `${this.baseUrl}/Delete/` + id;
    return this.http.delete(url);
  }

}
