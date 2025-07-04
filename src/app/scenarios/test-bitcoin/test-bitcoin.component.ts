import { Component, OnInit } from '@angular/core';
import { TestBitcoinService } from './services/test-bitcoin.service';
import { forkJoin, map, Observable, tap, combineLatest,take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'zh-test-bitcoin',
  standalone: true,
  imports: [AsyncPipe, MatButton, MatIcon],
  templateUrl: './test-bitcoin.component.html',
  styleUrl: './test-bitcoin.component.scss',
})
export class TestBitcoinComponent implements OnInit {
  bankAccountBalance: number;
  bitcoinPrice$: Observable<number>;
  bitcoinsPurchased$: Observable<{ bitcoins: number; unitPrice: number }>;
  constructor(private testBitcoinService: TestBitcoinService) {}

  ngOnInit(): void {
    this.bitcoinPrice$ = this.getBitcoinPrice$();
  }

  private getBankAccountBalance$() {
    return this.testBitcoinService.getBankAccountBalance$();
  }

  private getBitcoinPrice$() {
    return this.testBitcoinService.getBitcoinPrice$();
  }

  showBankAccountBalance() {
    this.getBankAccountBalance$().subscribe((balance) => {
      this.bankAccountBalance = balance;
    });
  }

  buyBitcoins() {
    if (this.bankAccountBalance > 0) {
      this.bankAccountBalance = 0;
      this.bitcoinsPurchased$ = combineLatest([this.getBankAccountBalance$(), this.bitcoinPrice$]).pipe(
        take(1),

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
