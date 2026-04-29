import { Component, inject } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'zh-test-log',
  imports: [],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss',
})
export class LogComponent {
  private readonly logService = inject(LogService);

  logs: string[] = [];
  ngOnInit() {
    this.logService.logs$.subscribe((msg) => {
      // Mantenemos los últimos 10 logs y los añadimos al principio
      this.logs = [msg, ...this.logs].slice(0, 10);
    });
  }

  clear() {
    this.logs = [];
    this.logService.clear();
  }
}
