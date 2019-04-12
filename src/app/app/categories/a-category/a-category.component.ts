import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from './a-category.model';
import { BudgetModel } from './../../budgets/a-budget/a-budget.model';
import { dbBudgets } from '../../fakedb/fakeDb';

@Component({
  selector: 'app-a-category',
  templateUrl: './a-category.component.html',
  styleUrls: ['./a-category.component.css']
})
export class ACategoryComponent implements OnInit {
  @Input()
  category: CategoryModel;

  @Input()
  budgets: any;


  constructor() { }

  ngOnInit() {
  }

}
