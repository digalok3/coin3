import { Component, OnInit } from '@angular/core';
import { IncomesServiceService } from './../../incomes/incomes-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
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
    this.incomesService.getEur().subscribe(data=> 
      { this.euro = data.map(val=> val.money).reduce((this.getSum),0)
      }
      )
    this.incomesService.getUSD().subscribe(data=> 
      { this.usd = data.map(val=> val.money).reduce((this.getSum), 0)
      }
      )
    this.incomesService.getRUB().subscribe(data=> 
      { this.rub = data.map(val=> val.money).reduce((this.getSum), 0)
      }
      )    
        }

        getSum(total, num) {
          return total + num;
        }

}
