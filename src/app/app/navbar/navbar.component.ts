import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from './../commonServices/alert-service.service';
import { CurrenciesService } from './../currencies.service';


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
  USD: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private currencies: CurrenciesService
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
    
    this.EUR = this.currencies.calculateEUR()
    this.USD = this.currencies.calculateUSD()
    this.currencies.getRates('https://openexchangerates.org/api/latest.json?app_id=af1dbc1ac588491ba0e30dbf0b3c06c7').subscribe(val=> this.rates=val)
      
  }

  

  onLogoutClick() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.alertService.alertOk('Вы вышли из своего аккаунта!')
    this.router.navigate(['/login']);
  }
}
