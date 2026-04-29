import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';



export interface AppState {
  user: string | null;
  loading: boolean;
  count: number;
}

const initialState: AppState = {
  user: null,
  loading: false,
  count: 0
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state$ = new BehaviorSubject<AppState>(initialState);

  // --- SELECTORES ---
  // Permiten obtener partes específicas del estado
  select<T>(selector: (state: AppState) => T): Observable<T> {
    return this.state$.asObservable().pipe(
      map(selector),
      distinctUntilChanged() // Fundamental: solo emite si el valor real cambia
    );
  }

  // --- DISPATCHER / REDUCER ---
  // La única forma de cambiar el estado
  dispatch(action: string, payload?: any) {
    const currentState = this.state$.getValue();
    const newState = this.reducer(currentState, action, payload);
    this.state$.next(newState);
  }

  private reducer(state: AppState, action: string, payload: any): AppState {
    switch (action) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'SET_USER':
        return { ...state, user: payload, loading: false };
      default:
        return state;
    }
  }
}
}
