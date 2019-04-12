import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from './../commonServices/alert-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() { 
  }

  onLogoutClick() {
    this.authService.logout();
    this.alertService.alertOk('Now you are logged out!')
    this.router.navigate(['/login']);
  }
}
