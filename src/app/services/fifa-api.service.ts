import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { DataTeam, Team } from '../entities/model-teams';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FifaListService {

  constructor(private http: HttpClient) { }
  
  login(credentials: any): Observable<any> {

    return this.http.post<any>(`${environment.urlDataTeams}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${environment.urlDataTeams}/logout`, {});
  }

  getTeams(initilValue: string='0', finalValue:string='10' ): Observable<DataTeam> {
    return this.http.get<DataTeam>(`${environment.urlDataTeams}/equipos/listar/${initilValue}/${finalValue}`);
  }

  createTeam(teamData: Team): Observable<DataTeam> {
    return this.http.post<DataTeam>(`${environment.urlDataTeams}/equipos/crear`, teamData);
  }

  getTeamsBetweenDates(startDate: string, endDate: string): Observable<[Team]> {
    return this.http.get<[Team]>(`${environment.urlDataTeams}/equipos/consultar/${startDate}/${endDate}`);
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.urlDataTeams}/equipos/consultar/${id}`);
  }

  updateTeam(id: number, updatedData: any): Observable<DataTeam> {
    return this.http.put<DataTeam>(`${environment.urlDataTeams}/equipos/actualizar/${id}`, updatedData);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.urlDataTeams}/equipos/eliminar/${id}`);
  }
}
