import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogService {
  private logSubject = new Subject<string>();
  // Observable para que el componente se suscriba
  logs$ = this.logSubject.asObservable();

  log(message: any) {
    const timestamp = new Date().toLocaleTimeString();
    const formattedMessage = `[${timestamp}] ${JSON.stringify(message)}`;
    this.logSubject.next(formattedMessage);

    // Opcional: seguir mostrando en la consola real
    console.log(message);
  }

  clear() {
    this.logSubject.next('--- Consola limpia ---');
  }
}
