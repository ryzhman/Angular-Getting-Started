import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  // alternatively, method can be used
  // getTitle = () => this.pageTitle;

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // productService: ProductService;
  _products: Product[];
  filteredProducts: Product[];
  _filterBy: string;
  private errorMessage: string;

  // getter is invoked when the this.filterBy = 10 is used
  get filterBy(): string {
    return this._filterBy;
  }

  // every time the filter is changed, the filter is performed
  set filterBy(value: string) {
    this._filterBy = value;
    this.filteredProducts = value ? this.performFilter(value) : this._products;
  }

  performFilter(filterBy: string = ''): Product[] {
    if (!this._products) {
      return new Array<Product>();
    }
    return this._products.filter((item: Product) => item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    // subscribe() to three types of events: next, error, complete. All of them can be functions
    // this._products = this.productService.getProducts().subscribe(
    //   value => console.log(value),
    //   error => console.error(error),
    //   () => console.log('completeEvent'));
    this.productService.getProducts().subscribe({
      next: products => {
        this._products = products;
        this.filteredProducts = this.performFilter(this._filterBy);
      },
      error: err => this.errorMessage = err
    });
    // alternative declaration
    // this.productService.getProducts().subscribe({
    //   next(products): void {
    //     this._products = products; --> this scopes to the function itself (!). Use only when don't use class level vars
    //     this.filteredProducts = this.performFilter(this._filterBy);
    //   },
    //   error(err): void {
    //     this.errorMessage = err;
    //   }
    // });
  }

  // constructor is called before onInit
  // you can ignore the service declaration just by using access modified - it is declaration and assignment at once
  constructor(private productService: ProductService) {
    // this._filterBy = 'cart';
    this.productService = productService;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    console.log('Event was thrown: ' + message);
    this.pageTitle = `${this.pageTitle} ${message}`;
  }
}
