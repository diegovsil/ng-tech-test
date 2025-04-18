import { Component } from '@angular/core';
import { TestPensionParentComponent } from './test-pension-parent/test-pension-parent.component';

@Component({
  selector: 'zh-test-pension',
  standalone: true,
  imports: [TestPensionParentComponent],
  templateUrl: './test-pension.component.html',
  styleUrl: './test-pension.component.scss'
})
export class TestPensionComponent {

}
