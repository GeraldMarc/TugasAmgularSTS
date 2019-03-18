import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product/home',
    pathMatch: 'full'
  },
  {
    path: 'product/home',
    component: ProductListComponent,
    data: { title: 'Home' }
  },
  {
    path: 'product/detail/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Detail' }
  },
  {
    path: 'product/add',
    component: AddProductFormComponent,
    data: { title: 'Add Product Form' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddProductFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
