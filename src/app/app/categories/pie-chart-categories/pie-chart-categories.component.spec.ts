import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartCategoriesComponent } from './pie-chart-categories.component';

describe('PieChartCategoriesComponent', () => {
  let component: PieChartCategoriesComponent;
  let fixture: ComponentFixture<PieChartCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
