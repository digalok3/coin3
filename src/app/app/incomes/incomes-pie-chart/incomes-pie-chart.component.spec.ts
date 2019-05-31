import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesPieChartComponent } from './incomes-pie-chart.component';

describe('IncomesPieChartComponent', () => {
  let component: IncomesPieChartComponent;
  let fixture: ComponentFixture<IncomesPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
