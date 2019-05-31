import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BudgetService } from './../budget.service';



@Component({
  selector: 'app-m-budgets',
  templateUrl: './m-budgets.component.html',
  styleUrls: ['./m-budgets.component.css']
 
})
export class MBudgetsComponent implements OnInit {

  budgets: any;

  @Input()
  isEdit: boolean;


  constructor(
    private budgetService: BudgetService
  ) {
     }

  ngOnInit() {
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data;
    })
  }

 
}
