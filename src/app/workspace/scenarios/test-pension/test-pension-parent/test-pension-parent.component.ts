import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TestPensionChildrenComponent } from '../test-pension-children/test-pension-children.component';

@Component({
  selector: 'zh-test-pension-parent',
  standalone: true,
  imports: [MatButton, TestPensionChildrenComponent],
  templateUrl: './test-pension-parent.component.html',
  styleUrl: './test-pension-parent.component.scss',
})
export class TestPensionParentComponent {
  person = { name: 'Pedro', age: 30 };

  constructor() {}

  birthday(): void {
    this.person.age++;
  }
}
