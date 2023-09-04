import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { DataTeam } from '../entities/model-teams';

interface State {
  authenticated: boolean;
  error: unknown;
}

@Injectable({ providedIn: 'root' })

export class AuthStateService {
  #state = new BehaviorSubject<State>({
    authenticated:false,
    error: null,
  });

  getAuthenticated() {
    return this.#state.asObservable().pipe(map((state) => state.authenticated));
  }
  getError() {
    return this.#state.asObservable().pipe(map((state) => state.error));
  }
  setAuthenticated(authenticated: boolean) {
    this.#state.next({
      ...this.#state.value,
      authenticated:authenticated,
    });
  }
  setError(error: unknown) {
    this.#state.next({
      ...this.#state.value,
      error,
    });
  }
}
