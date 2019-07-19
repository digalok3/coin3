import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BudgetService } from './../budget.service';
import { Location } from '@angular/common';
import { CurrenciesService } from './../../currencies.service';
import { Subscription } from 'rxjs';
// const _ = require('lodash');

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


  constructor(
    private route: ActivatedRoute,
    private budgetService: BudgetService,
    private _location: Location,
    private currencyService: CurrenciesService
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
    this.rates = val.rates
    this.ratio = this.rates[this.budgetTwo.currency] / this.rates[this.budgetOne.currency]
    this.ratio = (Math.floor((this.ratio)*100)/100)
   
})
  }

  goBack() {
    this._location.back();
  }

  saveForm() {
        console.log(this.transferForm.value)

  }

  currencyDivision() {
  }

  ngOnDestroy () {
    this.transferMoneySubscription.unsubscribe()
  }
}
