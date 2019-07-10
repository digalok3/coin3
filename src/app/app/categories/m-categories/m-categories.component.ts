import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { BudgetService } from './../../budgets/budget.service';
import { CategoryService } from './../category.service';
import { AlertService } from './../../commonServices/alert-service.service';
import { Observable, Subscription } from 'rxjs';
import { CategoryModel } from './../a-category/a-category.model';





@Component({
  selector: 'app-m-categories',
  templateUrl: './m-categories.component.html',
  styleUrls: ['./m-categories.component.css']
})
export class MCategoriesComponent implements OnInit, OnDestroy {  
  private subscriptionCategories: Subscription;
  private subscriptionBudgets: Subscription;


  @Input()
  isEdit: boolean;
  categories: any;
  budgets: any;

  constructor(
    private categoryService: CategoryService,
    private budgetService: BudgetService,
  ) { }

  ngOnInit() {
    this.subscriptionBudgets = this.budgetService.getBudgets().subscribe(data => this.budgets = data);
   this.subscriptionCategories = this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

  ngOnDestroy() {
  this.subscriptionCategories.unsubscribe();
  this.subscriptionBudgets.unsubscribe();
  }  

}
