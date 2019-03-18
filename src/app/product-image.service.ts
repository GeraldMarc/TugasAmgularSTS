import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductImage, ProductImageAdapter } from './product-image.model';

@Injectable({
  providedIn: 'root'
})

export class ProductImageService {
  private baseUrl = 'http://127.0.0.1:8000/api/ProductImage';

  constructor(
    private http: HttpClient,
    private adapter: ProductImageAdapter,
  ) { }

  getWithParam(id): Observable<ProductImage[]> {
    const url = `${this.baseUrl}/GetWithParam/` + id;
    return this.http.get(url).pipe(
      map((data: any[]) => data['data'].map(item => this.adapter.adapt(item))),
    );
  }
}

