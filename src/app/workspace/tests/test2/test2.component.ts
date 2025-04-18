import { Component, OnInit } from '@angular/core';
import { Test2Service } from './services/test2.service';
import { forkJoin, map, Observable, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [AsyncPipe, MatButton],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss',
})
export class Test2Component implements OnInit {
  backAccountBalance$: Observable<number>;
  backAccountBalance: number;
  bitcoinPrice$: Observable<number>;
  bitcoinPrice: number;
  bitcoinsPurchased$: Observable<number>;
  constructor(private test2Service: Test2Service) {}

  ngOnInit(): void {}

  getBankAccountBalance() {
    if (!this.backAccountBalance) {
      this.backAccountBalance$ = this.test2Service.getBankAccountBalance$();
    }
  }

  getBitcoinPrice() {
    this.bitcoinPrice$ = this.test2Service.getBitcoinPrice$();
  }

  buyBitcoins() {
    this.bitcoinsPurchased$ = forkJoin([this.backAccountBalance$, this.bitcoinPrice$]).pipe(
      map(([backAccountBalance, bitcoinPrice]) => {
        return Math.floor(backAccountBalance / bitcoinPrice);
      }),
    );
  }
}
