import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { IncomesServiceService } from './../incomes-service.service';
import { BudgetService } from './../../budgets/budget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-incomes-pie-chart',
  templateUrl: './incomes-pie-chart.component.html',
  styleUrls: ['./incomes-pie-chart.component.css']
})
export class IncomesPieChartComponent implements OnInit, OnDestroy {
  // Pie
  getBudgetsSubscription: Subscription;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(0,191,255,0.3)','rgba(255,166,0,0.3)','rgba(255, 42, 118,0.3)','rgba(30, 206, 118,0.3)'],
    },
  ];

  public incomesMoneys: any[];
  public incomesNames: any[];
  private budgets: any[]
  


  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.getBudgetsSubscription = this.budgetService.getBudgets().subscribe(data=> {
      this.budgets = data;
      this.pieChartData = this.budgets.map((val)=> {
       return val.money;
      })
      this.pieChartLabels = this.budgets.map((val)=> {
       return val.name
      })

    })
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnDestroy () {
    this.getBudgetsSubscription.unsubscribe()
  }
 
}

