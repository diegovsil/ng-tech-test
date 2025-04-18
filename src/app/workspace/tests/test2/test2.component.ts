import { Component, OnInit } from '@angular/core';
import { Test2Service } from './services/test2.service';
import { forkJoin, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [AsyncPipe, MatButton, MatIcon],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss',
})
export class Test2Component implements OnInit {
  bankAccountBalance: number;
  bitcoinPrice$: Observable<number>;
  bitcoinsPurchased$: Observable<{ bitcoins: number; unitPrice: number }>;
  constructor(private test2Service: Test2Service) {}

  ngOnInit(): void {
    this.bitcoinPrice$ = this.getBitcoinPrice$();
  }

  private getBankAccountBalance$() {
    return this.test2Service.getBankAccountBalance$();
  }

  private getBitcoinPrice$() {
    return this.test2Service.getBitcoinPrice$();
  }

  showBankAccountBalance() {
    this.getBankAccountBalance$().subscribe((balance) => {
      this.bankAccountBalance = balance;
    });
  }

  buyBitcoins() {
    if (this.bankAccountBalance > 0) {
      this.bankAccountBalance = 0;
      this.bitcoinsPurchased$ = forkJoin([this.getBankAccountBalance$(), this.bitcoinPrice$]).pipe(
        map(([bankAccountBalance, bitcoinPrice]) => {
          return {
            bitcoins: Math.floor(bankAccountBalance / bitcoinPrice),
            unitPrice: bitcoinPrice,
          };
        }),
      );
    }
  }
}
