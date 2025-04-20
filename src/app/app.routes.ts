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
      {
        path: '3',
        loadComponent: () => import('./scenarios/test-songs-finder/test-songs-finder.component').then((m) => m.TestSongsFinderComponent),
      },
      {
        path: '4',
        loadComponent: () => import('./scenarios/test-shop/test-shop.component').then((m) => m.TestShopComponent),
      },
      {
        path: '5',
        loadComponent: () => import('./scenarios/test-user-sections/test-user-sections.component').then((m) => m.TestUserSectionsComponent),
        children: [
          {
            path: '',
            loadChildren: () => import('./scenarios/test-user-sections/user.routes')
              .then((m) => m.userRoutes),
          },
        ],

      },
    ],
  },
];
