import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CategoryService } from './../category.service';
import { AlertService } from './../../commonServices/alert-service.service';
import { NgForm } from '@angular/forms';
import { IncomesServiceService } from '../../incomes/incomes-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.css']
})
export class DashboardCategoriesComponent implements OnInit, OnDestroy {
  @ViewChild('f2') addCategoryForm: NgForm;
  private getExpensesSubscription: Subscription;

  

  expenses: any;

  constructor(
    private categoryService: CategoryService,
    private alertService: AlertService,
    private incomesService: IncomesServiceService
  ) { }

  ngOnInit() {
    this.getExpensesSubscription = this.incomesService.getExpenses().subscribe(data=>  
      this.expenses=data
      )
  }  

  addCategory(categoryName: string, _moneyLimit: number): void {
    this.categoryService.addCategory({
      name: categoryName,
      money: 0,
      progressBar: 0,
      moneyLimit: _moneyLimit > 0 ? _moneyLimit: 0,
      photoURL: ''
    });
    this.alertService.alertOk('Категория успешно добавлена!');
    this.addCategoryForm.reset();
  }

  ngOnDestroy(){
    this.getExpensesSubscription.unsubscribe()
  }
}
