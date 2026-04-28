import { Component } from '@angular/core';
import { of, from } from 'rxjs';
import { concatMap, mergeMap, switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'zh-test-playground',
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  constructor() {
    this.clicks.pipe(mergeMap((id) => this.simulateApi(id))).subscribe(console.log);
    //this.clicks.pipe(concatMap((id) => this.simulateApi(id))).subscribe(console.log);
    //this.clicks.pipe(switchMap((id) => this.simulateApi(id))).subscribe(console.log);
  }

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
  // clicks.pipe(switchMap(id => simulateApi(id))).subscribe(console.log);
}
