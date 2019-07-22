import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from './../budget.service';
import { Location } from '@angular/common';
import { CurrenciesService } from './../../currencies.service';
import { Subscription } from 'rxjs';
import { AlertService } from './../../commonServices/alert-service.service';
import { Router, ActivatedRoute } from '@angular/router';


import _ from 'lodash'




@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.css']
})
export class TransferModalComponent implements OnInit, OnDestroy {
  @ViewChild('f') transferForm: NgForm;
  transferMoneySubscription: Subscription;
  id: string;
  closeResult: string;
  budgetOne: any;
  temporaryId: string;
  budgetTwo: any;
  sum: number;
  rates: any;
  ratio: number;
  loading: boolean= true;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private budgetService: BudgetService,
    private _location: Location,
    private currencyService: CurrenciesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.transferMoneySubscription = this.budgetService.transferMoney.subscribe(val=> this.temporaryId=val.id)
  
    this.budgetService.getBudgets().subscribe(data=> {
      data.filter((val, i)=> {
      if (data[i].id===this.id) {
       this.budgetOne = data[i]; 
      }
    })
  })

    this.budgetService.getBudgets().subscribe(data=> {
      data.filter((val, i)=> {
      if (data[i].id===this.temporaryId) {
       this.budgetTwo = data[i]; 
      }
    })
    
  })

    
    this.currencyService.getRates('https://openexchangerates.org/api/latest.json?app_id=af1dbc1ac588491ba0e30dbf0b3c06c7').subscribe(val=> {
      setTimeout(() => {
        this.rates = val.rates
        this.ratio = this.rates[this.budgetTwo.currency] / this.rates[this.budgetOne.currency]
        if(this.budgetOne && this.budgetOne.currency !== 'RUB') {
          this.ratio = (Math.floor((this.ratio)*100)/100)
        }
        if(this.budgetOne && this.budgetOne.currency === 'RUB') {
          this.ratio = (Math.floor((this.ratio)*1000)/1000)      }
        this.loading = false;        
      }, 1500);    
  
  }) 
 

  }

  goBack() {
    this._location.back();
  }

  saveForm() {
        this.budgetService.minusMoneyToABudget(this.budgetOne.id,this.transferForm.value.name3)
        let sum  = this.transferForm.value.name3*this.ratio
        let sum2 = Math.floor((sum)*100)/100
        this.budgetService.plusMoneyToABudget2(this.budgetTwo.id, sum2)
        this.alertService.toast('Деньги успешно переведены!')
        this.router.navigateByUrl('/')

  } 
 

  ngOnDestroy () {
    this.transferMoneySubscription.unsubscribe()
  }

  


}
