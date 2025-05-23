import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { TestUserSectionsService } from '../services/test-user-sections.service';
import { UserTypes } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class Autorization implements CanActivate {
  constructor(private testUserSectionsService: TestUserSectionsService) {}
  canActivate(): boolean {
    if (this.testUserSectionsService.user.type === UserTypes.guest) {
      return false;
    } else {
      return true;
    }
  }
}
