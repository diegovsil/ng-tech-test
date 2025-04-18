import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tests',
    children: [
      {
        path: '1',
        loadComponent: () => import('./workspace/tests/test-pension/test-pension.component').then((m) => m.TestPensionComponent),
      },
      {
        path: '2',
        loadComponent: () => import('./workspace/tests/test2/test2.component').then((m) => m.Test2Component),
      },
    ],
  },
];
