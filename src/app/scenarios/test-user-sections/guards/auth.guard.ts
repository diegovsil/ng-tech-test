
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { UserTypes } from '../models/user.model';


  import {TestUserSectionsService} from '../services/test-user-sections.service';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  readonly userSectionsService = inject(TestUserSectionsService);

  constructor(
    private router: Router

  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
        return  (this.userSectionsService.user.type === UserTypes.guest)

    }


}
