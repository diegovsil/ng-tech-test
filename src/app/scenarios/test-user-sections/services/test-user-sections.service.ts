import { Injectable } from '@angular/core';
import { User, UserType, UserTypes } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TestUserSectionsService {
  constructor() {}

  public userData: User = {
    name: 'Juan',
    type: UserTypes.guest,
  };

  set userType(type: UserType) {
    this.userData = { ...this.userData, type };
  }

  get user() {
    return this.userData;
  }
}
