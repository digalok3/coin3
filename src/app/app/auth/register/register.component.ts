import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service'
import {Router} from '@angular/router';
import { AlertService } from './../../commonServices/alert-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.register(this.email, this.password)
    .then(res => {
      this.alertService.alertOk('Now you are registered!');
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.alertService.alertOk('Something went wrong');
    });
  }

}