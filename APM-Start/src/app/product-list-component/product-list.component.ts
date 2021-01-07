import {Component} from '@angular/core';
import {ProductService} from '../../services/ProductService';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  // alternatively, method can be used
  // getTitle = () => this.pageTitle;

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filterBy: string = 'Enter your value here';
  productService: ProductService;
  products: object[];

  constructor() {
    this.productService = new ProductService();
    this.products = this.productService.getProducts()
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
