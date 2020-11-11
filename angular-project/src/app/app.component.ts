import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName: string = "";
  password: string = "";
  loginButton: string = "Войти";
  loginError: boolean = false; // Придерживайтесь camelCase при именовании переменных
  loggedIn: boolean;

  constructor( private auth: AuthService ) { }

  toggleLogin() {
    this.loggedIn = this.auth.handleLogin(this.userName, this.password);
    this.loginError = this.auth.loginError;
    this.loginButton = this.loggedIn ? "Выйти" : "Войти";
  }
}
