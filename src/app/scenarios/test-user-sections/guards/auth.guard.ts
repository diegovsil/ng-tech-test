import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TestUserSectionsService } from '../services/test-user-sections.service';
import { UserTypes } from '../models/user.model';

export const authGuard: CanActivateFn = (route, state) => {
  const testUserSectionsService = inject(TestUserSectionsService);
  const router = inject(Router);
  const user = testUserSectionsService.user;

  if (user.type === UserTypes.registered) return true

  return router.createUrlTree(['/public'])
};
