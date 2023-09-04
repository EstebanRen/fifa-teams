import { Injectable } from '@angular/core';
import { AuthStateService } from './auth-state.service';
import { AuthService } from './auth-api.service';
@Injectable()

export class AuthFacadeService {
  constructor(
    private authService: AuthService,
    private authState: AuthStateService,
  ) { }

  loginUser(data: any) {
    const credentials = {
      username: data.user,
      password: data.password,
    };

    this.authService.login(credentials).subscribe((data) => {
    })
    this.setAuthenticated();

  }
  setAuthenticated() {
    this.authState.setAuthenticated(true);
  }
  logout() {
    this.authState.setAuthenticated(false);
  }
}
