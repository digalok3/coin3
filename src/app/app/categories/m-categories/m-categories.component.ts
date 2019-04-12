import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './../a-category/a-category.model';
import { dbCategories } from '../../fakedb/fakeDb';
import { BudgetService } from './../../budgets/budget.service';


@Component({
  selector: 'app-m-categories',
  templateUrl: './m-categories.component.html',
  styleUrls: ['./m-categories.component.css']
})
export class MCategoriesComponent implements OnInit {
  categories: CategoryModel[] = dbCategories;
  budgets: any;

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.budgetService.getBudgets().subscribe(data => this.budgets = data);
  }

  // addCategory(): void {
  //   // tslint:disable-next-line: new-parens
  //       this.budgetService.addCategory({name: this.addBudgetForm.value.budgetName, money: 0, date: new Date});
  //       this.alertService.alertOk('Budget has just added!');
  //       this.addBudgetForm.reset();
  //     } 

}
