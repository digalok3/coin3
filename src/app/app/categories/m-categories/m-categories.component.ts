import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BudgetService } from './../../budgets/budget.service';
import { CategoryService } from './../category.service';
import { AlertService } from './../../commonServices/alert-service.service';





@Component({
  selector: 'app-m-categories',
  templateUrl: './m-categories.component.html',
  styleUrls: ['./m-categories.component.css']
})
export class MCategoriesComponent implements OnInit {  


  @Input()
  isEdit: boolean;

  categories: any;
  budgets: any;

  constructor(
    private categoryService: CategoryService,
    private budgetService: BudgetService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.budgetService.getBudgets().subscribe(data => this.budgets = data);
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

  

}
