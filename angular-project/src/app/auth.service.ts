import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string = "User";
  private password: string = "Any";
  private loggedIn = false;
  loginError: boolean = false;

  isAuthenticated() : Observable<boolean> {
    return of(this.loggedIn);
  }

  handleLogin(userName: string, password: string) : boolean {
    this.loginError = false;
    if(this.loggedIn) {
      return this.loggedIn = false;
    }
    else {
      if(userName == this.userName && password == this.password) {
        return this.loggedIn = true;
      } else {
        this.loginError = true;
        return false;
      }
    }
  }
}
