import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from './a-category.model';
import { BudgetModel } from './../../budgets/a-budget/a-budget.model';
import { CategoryService } from './../category.service';
import { BudgetService } from './../../budgets/budget.service';
import { imagesArray } from '../../commonServices/images';
import Swal from 'sweetalert2';
import { AlertService } from './../../commonServices/alert-service.service';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 5000
})

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

  @Input()
  isEdit: boolean;

  photoUrl: string;


  constructor(
    private serviceCategory: CategoryService,
    private budgetService: BudgetService,
    private categoryService: CategoryService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.photoUrl = imagesArray(25)[11];
  }

  addCategory(category: CategoryModel): void {
    this.serviceCategory.addCategory(category);
  }

  addSum(categoryId: string, value: number, budgetName: string) {
    if (value>0) {
      this.serviceCategory.addSumToCategory(categoryId, value, this.category.name);
      let budgetId = this.budgets.filter(val=> val.name===budgetName)
      this.budgetService.minusMoneyToABudget(budgetId[0].id, value)
    }
   
  }

  currentLimit() {
    if(this.category.moneyLimit > 0) 
    {    
    let b;
    b = (Math.ceil((this.category.money / this.category.moneyLimit)*100))
    return b}
    else
    { return 0}
  }

  getCurrentType() {
    let a = this.category.money;
    let b = this.category.moneyLimit;
    if (a < (0.25 * b)) {
      return "info"
    }
    else if (a > (0.25 * b) && a < (0.5 * b) ) {
      return "primary"
    }
    else if (a > (0.5 * b) && a < (0.75 * b) ) {
      return "success"
    }
    else if (a > (0.75 * b) && a < b ) {
      return "warning"
    }
    else if (a > b)  {
      return "danger"
    }
  }  

  deleteCategory(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.value) {
        this.categoryService.deleteCategory(this.category.id)
        this.alertService.toast('The category has been removed')
      }
    });
  }

  heyDrop(ev: any) {
    ev.preventDefault()
    const hren = ev.dataTransfer.getData('Text')
       }

    allowDrop(ev: any) {
    ev.preventDefault()
  

}

}
