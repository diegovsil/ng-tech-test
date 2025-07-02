import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';
import { PrivateSectionComponent } from './private-section/private-section.component';
import { PublicSectionComponent } from './public-section/public-section.component';
import { inject } from '@angular/core';
import { TestUserSectionsService } from './services/test-user-sections.service';
import { UserTypes } from './models/user.model';

const canActivatePrivateRoute: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(TestUserSectionsService).user.type !== UserTypes.guest;
};

export const userRoutes: Routes = [
  {
    path: 'public',
    component: PublicSectionComponent,
  },
  {
    path: 'private',
    component: PrivateSectionComponent,
    canActivate: [canActivatePrivateRoute]
  },
];



