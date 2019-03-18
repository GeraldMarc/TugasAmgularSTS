import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductImage } from '../product-image.model';
import { ProductImageService } from '../product-image.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product;
  images: ProductImage[];
  private unsubscribe: Subject<void> = new Subject();
  private id: number;

  constructor(private productService: ProductService, private imageService: ProductImageService, private route: ActivatedRoute) {
    this.product = null;
    this.images = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = +params['id'];
    });
    this.productService.getByID(this.id).subscribe((product: Product) => { this.product = product; console.log(this.product); });
    this.imageService.getWithParam(this.id).subscribe((images: ProductImage[]) => { this.images = images; });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
