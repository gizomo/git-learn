import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-project'; // Неиспользуемое свойство нужно удалить
  username: string = "";
  password: string = "";
  loginbutton: string = "Войти";
  loggintoggle: boolean = false;
  logginerror: boolean = false; // Придерживайтесь camelCase при именовании переменных

  constructor( private auth: AuthService ) { }

  handleLogin() {
    // Здесь очень много логики получается и лучше её вынести в сервис, а здесь оставить только вызов
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
