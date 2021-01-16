import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductDetailGuard} from "../guards/product-detail.guard";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductDetailGuard]},
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {
}
