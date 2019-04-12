import { Component, OnInit, Input } from '@angular/core';
import { BudgetModel } from './a-budget.model';
import { AuthService } from './../../auth/auth.service';
import { BudgetService } from './../budget.service';


@Component({
  selector: 'app-a-budget',
  templateUrl: './a-budget.component.html',
  styleUrls: ['./a-budget.component.css']
})

export class ABudgetComponent implements OnInit {
  @Input()
  budget: BudgetModel;

  constructor(
    private authService: AuthService,
    private budgetService: BudgetService
    ) {
      }

  ngOnInit() {
    
  }

  plusMoney(value: number, id: string): void {
    this.budgetService.plusMoneyToABudget(id, value);
  }

  minusMoney(value: number, id: string): void {
    this.budgetService.minusMoneyToABudget(id, value);
  }

}


  // plusMoney(value: number, id: number): void {
  //   this.obj1[id].money += Number(value);
  //   this.obj2 = [...this.obj2, {date: new Date(), money: Number(value)}];
  // }

  // minusMoney(value: number, id: number): void {
  //   this.obj1[id].money -= Number(value);
  //   this.obj2 = [...this.obj2, {date: new Date(), money: Number(value)}];    
  // }