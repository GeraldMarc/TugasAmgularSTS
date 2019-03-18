import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable, Subject } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[];
  private unsubscribe: Subject<void> = new Subject();

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this.productService.getAll().subscribe((products: Product[]) => { this.products = products; });
  }

  editProduct() {

  }

  removeProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService
        .deleteByID(id)
        .subscribe(result => {result['message'] === 'success' ? alert('Delete successful') : alert('Delete failed'); } );
      location.reload();
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
