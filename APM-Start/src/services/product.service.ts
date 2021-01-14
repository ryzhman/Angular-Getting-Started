import {products as productsJson} from './products';
import {Product} from '../models/Product';
import {Injectable} from '@angular/core';

// if registered in a root, singleton is used. If registered in a module (!) - prototype is used
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return productsJson as Product[];
  }
}
