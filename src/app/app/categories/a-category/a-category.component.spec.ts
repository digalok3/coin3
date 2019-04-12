import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACategoryComponent } from './a-category.component';

describe('ACategoryComponent', () => {
  let component: ACategoryComponent;
  let fixture: ComponentFixture<ACategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
