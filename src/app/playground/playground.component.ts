import { Component, inject } from '@angular/core';
import { of, from, Observable, Subject, BehaviorSubject } from 'rxjs';
import { concatMap, mergeMap, switchMap, delay, distinctUntilChanged } from 'rxjs/operators';
import { LogComponent } from './log/log.component';
import { LogService } from './log/log.service';
import { incrementAction, setUserAction, StateService } from './state/state.service';

@Component({
  selector: 'zh-test-playground',
  imports: [LogComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  private readonly logService = inject(LogService);
  private readonly store = inject(StateService);
  constructor() {
    //this.clicks.pipe(mergeMap((id) => this.simulateApi(id))).subscribe(console.log);
  }

  ngOnInit() {

    this.store.state$.pipe(distinctUntilChanged()).subscribe((state) => {
      console.log(`estado`, state);
    });

    this.store.dispatch(incrementAction());
    //this.store.dispatch({ type: 'SET_USER', payload: { name: 'John Doe', age: 30 } });
    this.store.dispatch(setUserAction({ name: 'John Doe', age: 30 }));
  }

  // #region Operadores de transformación: mergeMap, concatMap, switchMap
  clicks = from(['Petición A', 'Petición B', 'Petición C']);

  // 2. Función que simula una llamada a API
  simulateApi(name: string) {
    // La petición A tarda 2s, la B tarda 0.5s y la C tarda 1s
    const delays: any = { 'Petición A': 2000, 'Petición B': 500, 'Petición C': 1000 };

    console.log(`🚀 Lanzando: ${name} (tardará ${delays[name]}ms)`);
    return of(`✅ Respuesta de ${name}`).pipe(delay(delays[name]));
  }

  // PRUEBA 1: mergeMap (Paralelo)
  // Verás que B llega primero porque es la más rápida.

  // PRUEBA 2: concatMap (Fila India)
  // No empieza B hasta que A termina. Tardan 2s + 0.5s + 1s.
  // clicks.pipe(concatMap(id => simulateApi(id))).subscribe(console.log);

  // PRUEBA 3: switchMap (El que cancela)
  // Como los clics son instantáneos, cancelará A y B antes de que terminen.
  //this.clicks.pipe(mergeMap((id) => this.simulateApi(id))).subscribe(console.log);
  //this.clicks.pipe(concatMap((id) => this.simulateApi(id))).subscribe(console.log);
  //this.clicks.pipe(switchMap((id) => this.simulateApi(id))).subscribe(console.log);

  //#endregion

  // #region Observable vs Observer

  miObservable = new Observable((subscriber) => {
    subscriber.next('Hola');
    subscriber.next('Mundo');
    subscriber.complete();
  });

  // 2. Definimos el OBSERVER (El cómo reaccionamos)
  miObserver = {
    next: (val: any) => console.log('Recibido:', val),
    error: (err: any) => console.error('Error:', err),
    complete: () => console.log('¡Flujo terminado!'),
  };

  // 3. LA CONEXIÓN (La suscripción)
  testSubscribe() {
    this.miObservable.subscribe(this.miObserver);
  }

  // #endregion

  // #region Subject
  // --- EL OBSERVABLE (Cerrado) ---

  obs$ = new Observable((sub) => {
    sub.next('Valor interno'); // Solo se puede emitir desde AQUÍ dentro
  });

  // --- EL SUBJECT (Abierto) ---
  subj$ = new Subject();

  testSubject() {
    // Funciona como OBSERVER:
    this.subj$.subscribe((v) => console.log('Observer 1 recibió:', v));
    this.subj$.subscribe((v) => console.log('Observer 2 recibió:', v));

    // Funciona como OBSERVABLE:
    this.subj$.next('¡Hola a todos!'); // Tú controlas la emisión desde FUERA
  }
  // #endregion
}
