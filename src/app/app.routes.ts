import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tests',
    children: [
      {
        path: '1',
        loadComponent: () => import('./scenarios/test-pension/test-pension.component').then((m) => m.TestPensionComponent),
      },
      {
        path: '2',
        loadComponent: () => import('./scenarios/test-bitcoin/test-bitcoin.component').then((m) => m.TestBitcoinComponent),
      },
    ],
  },
];
