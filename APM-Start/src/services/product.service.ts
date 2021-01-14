import {Product} from '../models/Product';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

// if registered in a root, singleton is used. If registered in a module (!) - prototype is used
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // it is registered in angular.json
  private productUrl = 'sampleApi/products.json';

  // create private http instance variable and injects
  constructor(private http: HttpClient) {
  }

  // a single observable is returned
  getProducts(): Observable<Product[]> {
    // typing the generic of the return
    return this.http.get<Product[]>(this.productUrl).pipe(
      // tap looks into the observable stream without transforming it
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line:typedef
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(`Couldn't get the list of products`);
  }
}
