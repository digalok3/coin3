import { Component, OnInit, OnDestroy } from '@angular/core';
import { IncomesServiceService } from './../../incomes/incomes-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit, OnDestroy {
  incomes: any;
  euro: any;
  usd: any;
  rub: any;
  rates: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private incomesService: IncomesServiceService
  ) { }

  ngOnInit() {

    this.subscriptions.push(this.incomesService.getIncomes().subscribe(data=>  
      this.incomes = data)
      )
      this.subscriptions.push(this.incomesService.getEur().subscribe(data=> 
      { this.euro = data.map(val=> val.money).reduce((this.getSum),0)
      }
      ))
      this.subscriptions.push(this.incomesService.getUSD().subscribe(data=> 
      { this.usd = data.map(val=> val.money).reduce((this.getSum), 0)
      }
      ))
      this.subscriptions.push(this.incomesService.getRUB().subscribe(data=> 
      { this.rub = data.map(val=> val.money).reduce((this.getSum), 0)
      }
      )    )
        }

        getSum(total, num) {
          return total + num;
        }

        ngOnDestroy() {
          this.subscriptions.forEach(sub=> sub.unsubscribe());
        }

}
