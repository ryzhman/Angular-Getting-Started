import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/ProductService';
import {Product} from '../../models/Product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  // alternatively, method can be used
  // getTitle = () => this.pageTitle;

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  productService: ProductService;
  _products: Product[];
  filteredProducts: Product[];
  _filterBy: string;

  // getter is invoked when the this.filterBy = 10 is used
  get filterBy(): string {
    return this._filterBy;
  }

  // every time the filter is changed, the filter is performed
  set filterBy(value: string) {
    this._filterBy = value;
    this.filteredProducts = value ? this.performFilter(value) : this._products;
  }

  performFilter(filterBy: string): Product[] {
    return this._products.filter((item: Product) => item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
  }

  constructor() {
    this._filterBy = 'cart';
    this.productService = new ProductService();
    this._products = this.productService.getProducts();
    this.filteredProducts = this.performFilter(this._filterBy);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    console.log('Event was thrown: ' + message);
    this.pageTitle = `${this.pageTitle} ${message}`;
  }
}