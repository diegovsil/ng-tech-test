import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User, UserType, UserTypes } from './models/user.model';
import { TestUserSectionsService } from './services/test-user-sections.service';
import {MatChip, MatChipSet} from '@angular/material/chips';

@Component({
  selector: 'zh-test-test-user-sections',
  standalone: true,
  imports: [MatButton, RouterLink, RouterOutlet, MatAnchor, MatChip, MatChipSet],
  templateUrl: './test-user-sections.component.html',
  styleUrl: './test-user-sections.component.scss',
})
export class TestUserSectionsComponent {
  readonly registeredType: UserType = UserTypes.registered;
  readonly guestType: UserType = UserTypes.guest;
  user: User;

  constructor(private testUserSectionsService: TestUserSectionsService,) {
    this.user = this.testUserSectionsService.user;
  }

  setRegisteredUser() {
    this.testUserSectionsService.userType = this.registeredType;
    this.user = this.testUserSectionsService.user;
  }
  setGuestdUser() {
    this.testUserSectionsService.userType = this.guestType;
    this.user = this.testUserSectionsService.user;
  }
}
