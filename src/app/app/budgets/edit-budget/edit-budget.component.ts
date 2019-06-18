import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './../../commonServices/alert-service.service';
import { BudgetService } from './../budget.service';
import { NgForm } from '@angular/forms';
import { BudgetModel } from './../a-budget/a-budget.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.css']
})
export class EditBudgetComponent implements OnInit {
  @ViewChild('f') editCategoryForm: NgForm;
  id: string;
  budget: any
  currencies = ['RUB','USD','EUR']

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private budgetService: BudgetService,
    private alertService:  AlertService,
    private _location: Location

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.budgetService.getBudgets().subscribe(data=> {
      data.filter((val, i)=> {
      if (data[i].id===this.id) {
       this.budget = data[i]  
      }
    })
  })
  }

  editBudget() {
    this.budgetService.updateBudget(this.editCategoryForm.value, this.id).then(()=> {
    this.alertService.toast('Счет успешно изменен!')
    this.router.navigateByUrl('/budgets')})    

  }
  
  goBack() {
    this._location.back();
  }
 

}

