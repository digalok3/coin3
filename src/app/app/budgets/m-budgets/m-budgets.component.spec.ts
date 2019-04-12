import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBudgetsComponent } from './m-budgets.component';

describe('MBudgetsComponent', () => {
  let component: MBudgetsComponent;
  let fixture: ComponentFixture<MBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
