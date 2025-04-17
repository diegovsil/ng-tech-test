import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Test1ChildrenComponent } from '../test1-children/test1-children.component';

@Component({
  selector: 'app-test1-parent',
  standalone: true,
  imports: [MatButton, Test1ChildrenComponent],
  templateUrl: './test1-parent.component.html',
  styleUrl: './test1-parent.component.scss'
})
export class Test1ParentComponent {
  person = { name: 'Pedro', age: 30 };


  constructor() {

  }

  birthday(): void {
    this.person.age++;
  }
}
