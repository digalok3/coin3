import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IncomeModel } from '../a-budget/a-budget.model';
import { BudgetModel } from './../a-budget/a-budget.model';
import { dbBudgets, dbBudgetsDates } from '../../fakedb/fakeDb';
import { AlertService } from './../../commonServices/alert-service.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { BudgetService } from './../budget.service';


@Component({
  selector: 'app-m-budgets',
  templateUrl: './m-budgets.component.html',
  styleUrls: ['./m-budgets.component.css']
 
})
export class MBudgetsComponent implements OnInit {  
  @ViewChild('f') addBudgetForm: NgForm;

  budgets: any;
  incomes: IncomeModel[] = dbBudgetsDates;

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private budgetService: BudgetService
  ) {
     }

  ngOnInit() {
    this.authService.getBudgets().subscribe(data => 
      this.budgets = data);
   
  }
  
  addBudget(): void {
     console.log(this.authService.authenticated) 
     console.log(this.authService.currentUserId
      ) 
    // this.budgetService.addBudget({name: this.addBudgetForm.value.budgetName, money: 0, date: new Date});
    // this.alertService.alertOk('Budget has just added!');
    // this.addBudgetForm.reset();
  } 

}
