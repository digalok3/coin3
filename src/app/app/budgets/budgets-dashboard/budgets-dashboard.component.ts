import { Component, OnInit, OnDestroy } from '@angular/core';
import { IncomesServiceService } from '../../incomes/incomes-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budgets-dashboard',
  templateUrl: './budgets-dashboard.component.html',
  styleUrls: ['./budgets-dashboard.component.css']
})
export class BudgetsDashboardComponent implements OnInit, OnDestroy {
  incomes: any;
  euro: any;
  usd: any;
  rub: any;
  rates: any;
  getIncomesSubscription: Subscription;

  constructor(
    private incomesService: IncomesServiceService
  ) { }

  ngOnInit() {
    this.getIncomesSubscription = this.incomesService.getIncomes().subscribe(data=>  
      this.incomes = data
      )    
        }
      
      
    getSum(total, num) {
    return total + num;
  }

  ngOnDestroy() {
    this.getIncomesSubscription.unsubscribe()
  }
}

