import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Product {
  constructor(
    public id: number,
    public sku: string,
    public name: string,
    public description: string,
    public unit_price: number,
    public product_category_id: number,
    public category_name: string,
    public product_image_url,
    public created: Date,
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class ProductAdapter implements Adapter<Product> {

  adapt(item: any): Product {
    return new Product(
      item.id,
      item.sku,
      item.name,
      item.description,
      item.unit_price,
      item.product_category_id,
      item.category_name,
      item.product_image_url,
      new Date(item.created),
    );
  }

}
