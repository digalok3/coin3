import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from './../budget.service';
import { AlertService } from './../../commonServices/alert-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {
  @ViewChild('f') addBudgetForm: NgForm;
  constructor(
    private alertService: AlertService,
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
  }

  addBudget(): void {
    this.budgetService.addBudget({name: this.addBudgetForm.value.budgetName, money: 0, date: new Date, currency: 'RUB'});
    this.alertService.alertOk('Новый счет успешно добавлен!');
    this.addBudgetForm.reset();
  }
}
