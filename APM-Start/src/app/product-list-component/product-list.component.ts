import {Component} from '@angular/core';
import {products as productsJson} from './products';
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
  products: object[] = productsJson;
  showImage: boolean = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
