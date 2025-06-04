import { Component } from '@angular/core';
import { TestPensionChildrenComponent } from './test-pension-children/test-pension-children.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'zh-test-pension',
  standalone: true,
  imports: [MatButton, TestPensionChildrenComponent],
  templateUrl: './test-pension.component.html',
  styleUrl: './test-pension.component.scss'
})
export class TestPensionComponent {
  person = { name: 'Pedro', age: 30 };

  constructor() {}

  birthday(): void {
    this.person = {
      ...this.person,
      age: this.person.age + 1
    };
  }
}
