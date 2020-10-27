import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-project';
  username: string = "";
  password: string = "";
  loginbutton: string = "Войти";
  loggintoggle: boolean = false;
  logginerror: boolean = false;

  constructor( private auth: AuthService ) { }
 
  handleLogin() {
    if(this.loggintoggle) {
      this.auth.logout();
      this.loginbutton = "Войти";
      this.loggintoggle = this.auth.isAuthenticated();
      this.username = '';
      this.password = '';
    }
    else {
      if(this.username === "User" && this.password === "Any") {
        this.auth.login();
        this.loginbutton = "Выйти";
        this.loggintoggle = this.auth.isAuthenticated();
      } else {
        this.logginerror = true;
      }
    }
  }
}
