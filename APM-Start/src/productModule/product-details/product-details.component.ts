import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  // selector is not required since the component is  not nested inside another component
  // selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  _product: Product;
  private pageTitle = 'Product item';

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe({
      next: item => this._product = item
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  set product(newProduct: Product) {
    this._product = newProduct;
  }

  get product(): Product {
    return this._product;
  }

}
