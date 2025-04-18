import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'zh-test-pension-children',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './test-pension-children.component.html',
  styleUrl: './test-pension-children.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPensionChildrenComponent implements OnChanges {
  pension: number = 0;
  @Input() person: { name: string; age: number };
  retirementAge: number = 67;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.person) {
      this.getPension();
    }
  }

  getPension() {
    this.pension = Math.round((2000 / this.retirementAge) * this.person.age * 10) / 10;
  }
}
