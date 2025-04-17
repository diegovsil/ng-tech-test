import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-test1-children',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './test1-children.component.html',
  styleUrl: './test1-children.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test1ChildrenComponent {
  @Input() person: {name: string, age: number} 
  retirementAge: number = 67;
}
