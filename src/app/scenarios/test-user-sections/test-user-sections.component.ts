import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { User, UserType, UserTypes } from './models/user.model';
import { TestUserSectionsService } from './services/test-user-sections.service';

@Component({
  selector: 'zh-test-test-user-sections',
  standalone: true,
  imports: [MatButton, RouterLink, RouterOutlet, MatAnchor],
  templateUrl: './test-user-sections.component.html',
  styleUrl: './test-user-sections.component.scss',
})
export class TestUserSectionsComponent {
  readonly registeredType: UserType = UserTypes.registered;
  readonly guestType: UserType = UserTypes.guest;
  user: User;
  usuario: UserType;

  constructor(private testUserSectionsService: TestUserSectionsService, private router: Router, private route: ActivatedRoute) {
    this.user = this.testUserSectionsService.user;
  }

  setRegisteredUser() {
    this.testUserSectionsService.userType = this.registeredType;
    this.user = this.testUserSectionsService.user;
    this.backToMainSection();
  }
  setGuestdUser() {
    this.testUserSectionsService.userType = this.guestType;
    this.user = this.testUserSectionsService.user;
    this.backToMainSection();
  }

  backToMainSection() {
    this.router.navigate(['./'], { relativeTo: this.route });
  }
}
