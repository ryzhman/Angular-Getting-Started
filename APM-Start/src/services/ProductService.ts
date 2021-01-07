import {products as productsJson} from './products';
import {Product} from "../models/Product";

export class ProductService {


  getProducts(): Product[] {
    return productsJson as Product[];
  }
}
