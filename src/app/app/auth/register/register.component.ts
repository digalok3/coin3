import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service'
import {Router} from '@angular/router';
import { AlertService } from './../../commonServices/alert-service.service';
import { BudgetService } from './../../budgets/budget.service';
import { CategoryService } from './../../categories/category.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  isLoading = false; 
  errorMessage: string;
  isError = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private budgetService: BudgetService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.isLoading = true;
    this.authService.register(this.email, this.password)
    .then(()=> {
      this.authService.login(this.email, this.password)
      .then(res => {
        this.alertService.alertOk('Вы зарегистрированы!');
        this.router.navigate(['/']);
        this.isLoading = false;
      })            
      .then(()=> {
        this.budgetService.addBudget({name: 'Наличные', money: 1000, date: new Date, currency: 'EUR'});
        this.budgetService.addBudget({name: 'Карта', money: 1000, date: new Date, currency: 'RUB'});
        this.budgetService.addBudget({name: 'Вклад', money: 500, date: new Date, currency: 'USD'});
        this.categoryService.addCategory({
          name: "Еда",
          money: 0,
          progressBar: 0,
          moneyLimit: 1000,
          photoURL: ''
        });
        this.categoryService.addCategory({
          name: "Машина",
          money: 0,
          progressBar: 0,
          moneyLimit: 1000,
          photoURL: ''
        });
        this.categoryService.addCategory({
          name: "Квартплата",
          money: 0,
          progressBar: 0,
          moneyLimit: 1000,
          photoURL: ''
        });
      })
    })  
    .catch(err => {
      this.isError = true;
      this.errorMessage = err.message;
      this.alertService.alertNotOk(err.message)
      this.isLoading = false;
    });
  }

}