import { Component, inject } from '@angular/core';
import { Product } from './models/products';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestShopService } from './services/test-shop.service';
import { AsyncPipe, NgIf, NgFor, CommonModule } from '@angular/common';
@Component({
  selector: 'zh-test-test-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-shop.component.html',
  styleUrl: './test-shop.component.scss'
})
export class TestShopComponent {

  shopService = inject(TestShopService);
  products$: Observable<Product[]> = this.shopService.getProducts$();
  private cartSubject = new BehaviorSubject<Product[]>([])
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cartSubject.getValue();
    this.cartSubject.next([...currentCart, product]);
  }

  removeFromCart(product: Product): void {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter(p => p.id !== product.id);
    this.cartSubject.next(updatedCart);
  }
}
