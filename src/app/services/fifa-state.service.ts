import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { DataTeam } from '../entities/model-teams';

interface State {
  teamsData: DataTeam;
  error: unknown;
}

@Injectable({ providedIn: 'root' })

export class FifaStateService {
  #state = new BehaviorSubject<State>({
    teamsData:{
      content:[]
    },
    error: null,
  });

  getTeamData() {
    return this.#state.asObservable().pipe(map((state) => state.teamsData));
  }
  getError() {
    return this.#state.asObservable().pipe(map((state) => state.error));
  }
  setTeamData(teamsData: DataTeam) {
    this.#state.next({
      ...this.#state.value,
      teamsData:teamsData,
    });
  }
  setError(error: unknown) {
    this.#state.next({
      ...this.#state.value,
      error,
    });
  }
}
