import { CanMatchFn } from '@angular/router';
import { TestUserSectionsService } from '../services/test-user-sections.service';
import { inject } from '@angular/core';
import { UserTypes } from '../models/user.model';

export const authCanMatch: CanMatchFn = () => {
  const usersService = inject(TestUserSectionsService);
  return usersService.user.type === UserTypes.registered;
};
