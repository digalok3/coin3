import { Component, OnInit } from '@angular/core';
import { IncomesServiceService } from '../../incomes/incomes-service.service';

@Component({
  selector: 'app-budgets-dashboard',
  templateUrl: './budgets-dashboard.component.html',
  styleUrls: ['./budgets-dashboard.component.css']
})
export class BudgetsDashboardComponent implements OnInit {
  incomes: any;
  euro: any;
  usd: any;
  rub: any;
  rates: any;

  constructor(
    private incomesService: IncomesServiceService
  ) { }

  ngOnInit() {
    this.incomesService.getIncomes().subscribe(data=>  
      this.incomes = data
      )    
        }
      
      
    getSum(total, num) {
    return total + num;
  }


}

