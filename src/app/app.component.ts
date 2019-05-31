import { Component, OnInit } from '@angular/core';
import { BudgetService } from './app/budgets/budget.service';
import { AuthService } from './app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time = Date.now();
  hren = 11;
  title = 'coin2';
  constructor(
    private budgetService: BudgetService,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {

  }

}
