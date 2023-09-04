import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) { }

    login(credentials: any): Observable<any> {
        return this.http.post<any>(`${environment.urlDataTeams}/login`, credentials);
    }

    logout(): Observable<any> {
        return this.http.post<any>(`${environment.urlDataTeams}/logout`, {});
    }
}
