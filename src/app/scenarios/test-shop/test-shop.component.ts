import { Component, inject,signal,computed } from '@angular/core';
import { CurrencyPipe,AsyncPipe } from '@angular/common';
import { TestShopService } from './services/test-shop.service';
import {Product}from './models/products';
import {BehaviorSubject} from 'rxjs';
import {map}from 'rxjs/operators'

@Component({
  selector: 'zh-test-test-shop',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './test-shop.component.html',
  styleUrl: './test-shop.component.scss'
})
export class TestShopComponent {
  #testShopService = inject(TestShopService);
  products$ = this.#testShopService.getProducts$();

  cart =  signal<Product[]>([]);
  checkoutInfo = computed(()=> {
    const products = this.cart();
    return {
      nProducts: products.length,
      amount: products.reduce((acc, product)=> acc + product.price, 0)
    }
  })

  addToCart(product: Product) {
    const currentCart = this.cart();

    this.cart.set([...currentCart, product]);
  }

  removeFromCart(idx: number){
    const currentCart = [...this.cart()];
    currentCart.splice(idx, 1);
    this.cart.set(currentCart);
  }
}
