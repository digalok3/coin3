import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { AlertService } from './../../commonServices/alert-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=> {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit()  {
    this.authService.login(this.email, this.password)
    .then(res => {
      if(this.authService.authenticated) {
        this.alertService.alertOk('Now you are logged in!');
        this.router.navigate(['/'])
      }
    })
    .catch(err => {
      this.alertService.alertOk('Something went wrong!');
    });
  }

}
