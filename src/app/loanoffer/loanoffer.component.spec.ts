import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofferComponent } from './loanoffer.component';

describe('LoanofferComponent', () => {
  let component: LoanofferComponent;
  let fixture: ComponentFixture<LoanofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
