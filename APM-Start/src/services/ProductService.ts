import {products as productsJson} from './products';

export class ProductService {


  getProducts(): object[] {
    return productsJson;
  }
}
