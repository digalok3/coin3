import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABudgetComponent } from './a-budget.component';

describe('ABudgetComponent', () => {
  let component: ABudgetComponent;
  let fixture: ComponentFixture<ABudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
