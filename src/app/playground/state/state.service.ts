import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export interface AppState {
  user: Record<string, any>; // {}
  loading: boolean;
  count: number;
}

const initialState: AppState = {
  user: null,
  loading: false,
  count: 0,
};

export interface Action {
  type: string;
  payload?: any;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public readonly state$ = new BehaviorSubject<AppState>(initialState);

  // --- SELECTORES ---
  // Permiten obtener partes específicas del estado
  select<T>(selector: (state: AppState) => T): Observable<T> {
    return this.state$.asObservable().pipe(
      map(selector),
      distinctUntilChanged(), // Fundamental: solo emite si el valor real cambia
    );
  }

  // --- DISPATCHER / REDUCER ---
  // La única forma de cambiar el estado
  dispatch(action: Action) {
    const currentState = this.state$.getValue();
    const newState = this.reducer(currentState, action);
    this.state$.next(newState);
  }

  private reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      case 'SET_USER':
        return { ...state, user: action.payload, loading: false };
      default:
        return state;
    }
  }
}

export const incrementAction = (): Action => ({ type: 'INCREMENT' });
export const decrementAction = (): Action => ({ type: 'DECREMENT' });
export const setUserAction = (user: any): Action => ({ type: 'SET_USER', payload: user });

