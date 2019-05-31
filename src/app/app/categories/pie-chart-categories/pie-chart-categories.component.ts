import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { CategoryService } from './../category.service';

@Component({
  selector: 'app-pie-chart-categories',
  templateUrl: './pie-chart-categories.component.html',
  styleUrls: ['./pie-chart-categories.component.css']
})
export class PieChartCategoriesComponent implements OnInit {

 // Pie
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
private categories: any[]


constructor(
  private categoryService: CategoryService
) { }

ngOnInit() {
  this.categoryService.getCategories().subscribe(data=> {
    this.categories = data;
    this.pieChartData = this.categories.map((val)=> {
     return val.money;
    })
    this.pieChartLabels = this.categories.map((val)=> {
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

changeLabels() {
  const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
    'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
    'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
    'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
    'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
  const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
}

addSlice() {
  this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
  this.pieChartData.push(400);
  this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
}

removeSlice() {
  this.pieChartLabels.pop();
  this.pieChartData.pop();
  this.pieChartColors[0].backgroundColor.pop();
}

changeLegendPosition() {
  this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
}

}
