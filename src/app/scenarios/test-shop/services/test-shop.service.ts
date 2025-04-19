import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../data/product.data';

@Injectable({
  providedIn: 'root',
})
export class TestShopService {
  constructor() {}

  getProducts$(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
