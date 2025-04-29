import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TestUserSectionsService } from './services/test-user-sections.service';
import {UserTypes} from './models/user.model'

export const testUserSectionsGuard: CanActivateFn = (route, state) => {
  const userService = inject(TestUserSectionsService);
  if(userService.user.type === UserTypes.registered){
    return true;
  }
  return false
};
