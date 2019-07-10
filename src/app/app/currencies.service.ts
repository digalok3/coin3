import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService implements OnInit{

  currencies: Observable<any>;
  rates: any;

  ngOnInit() {

  fetch('https://openexchangerates.org/api/latest.json?app_id=af1dbc1ac588491ba0e30dbf0b3c06c7')
  .then(res=> res.json())
  .then(val=> this.rates=val)  
  console.log(this.rates)
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getRates(url: string): Observable<any>{
    return this.httpClient.get(url);
}

  public calculateUSD() {
  if(this.rates) {
    return (Math.floor((this.rates.rates.RUB)*100)/100)
  }
}



public calculateEUR() {
  if(this.rates) {
    return (Math.floor((1 / this.rates.rates.EUR*this.rates.rates.RUB)*100)/100)
  }

}

}
