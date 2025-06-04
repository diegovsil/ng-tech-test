import { Routes } from '@angular/router';
import { PrivateSectionComponent } from './private-section/private-section.component';
import { PublicSectionComponent } from './public-section/public-section.component';
import {authCanMatch} from './guards/auth.guard';

export const userRoutes: Routes = [
  {
    path: 'public',
    component: PublicSectionComponent,
  },
  {
    path: 'private',
    canMatch: [authCanMatch],
    component: PrivateSectionComponent,
  },
  {
    path: '**',
    redirectTo: 'public'
  }
];
