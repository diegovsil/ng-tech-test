import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-test1-children',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './test1-children.component.html',
  styleUrl: './test1-children.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test1ChildrenComponent implements OnChanges {
  pension: number = 0;
  @Input() person: { name: string, age: number }
  retirementAge: number = 67;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.person) {
      this.getPension();
    }
  }

  getPension() {
    this.pension = Math.round(2000 / this.retirementAge * (this.person.age) * 10) / 10;
  }

}
