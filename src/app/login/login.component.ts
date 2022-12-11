import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public router: Router) {}

  login() {
    if (this.username == 'siva@gmail.com' && this.password == 'Siva') {
      this.router.navigate(['/home']);
    } else {
      alert('please enter valid username and pwd');
    }
  }

  register() {
    // register
    this.router.navigate(['/register']);
  }
}
