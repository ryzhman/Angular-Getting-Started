import {Product} from '../models/Product';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

// if registered in a root, singleton is used. If registered in a module (!) - prototype is used
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // it is registered in angular.json
  private productUrl = 'sampleApi/products.json';
  private products: Product[];

  // create private http instance variable and injects
  private errorMessage: string;

  constructor(private http: HttpClient) {
  }

  // a single observable is returned
  getProducts(): Observable<Product[]> {
    // typing the generic of the return
    return this.http.get<Product[]>(this.productUrl).pipe(
      // tap looks into the observable stream without transforming it
      tap(data => {
        // console.log(JSON.stringify(data));
        this.products = data;
      }),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line:typedef
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(`Couldn't get the list of products`);
  }

  getById(id: number): Observable<Product> {
    if (!id) {
      throwError(`Couldn't find the product with id: ${id}`);
    }
    if (this.products) {
      // never hits this flow
      console.log('Products already loaded');
      return new Observable<Product>(subscriber => subscriber.next(this.products.filter((item: Product) => item.productId === id)[0]));
    } else {
      return this.getProducts().pipe(map(products => {
          console.log('Products got loaded from scratch');
          this.products = products;
          return this.products.filter((item: Product) => item.productId === id)[0];
        }
      ));
    }
  }
}
