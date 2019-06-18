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
  rates: any;
  EUR: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=> {
      if (auth) {
       this.isLoggedIn = true  
        this.loggedInUser = auth.email } 
        else {
          this.isLoggedIn = false;
        }
    });

    fetch('https://openexchangerates.org/api/latest.json?app_id=af1dbc1ac588491ba0e30dbf0b3c06c7').then(res=> 
    res.json())
    .then(resp => this.rates = resp)
  }

    calculateUSD() {
      if(this.rates) {
        return (Math.floor((this.rates.rates.RUB)*100)/100)
      }
    }


    calculateEUR() {
      if(this.rates) {
        return (Math.floor((1 / this.rates.rates.EUR*this.rates.rates.RUB)*100)/100)
      }

    }

  onLogoutClick() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.alertService.alertOk('Вы вышли из своего аккаунта!')
    this.router.navigate(['/login']);
  }
}
