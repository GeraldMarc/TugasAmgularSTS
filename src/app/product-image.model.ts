import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class ProductImage {
  constructor(
    public id: number,
    public product_image_url: string,
    public main_image: boolean,
    public product_id: number,
    public created: Date,
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class ProductImageAdapter implements Adapter<ProductImage> {

  adapt(item: any): ProductImage {
    return new ProductImage(
      item.id,
      item.product_image_url,
      item.main_image,
      item.product_id,
      new Date(item.created),
    );
  }

}
