import { Component } from '@angular/core';
import { Test1ParentComponent } from './test1-parent/test1-parent.component';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [Test1ParentComponent],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {

}
