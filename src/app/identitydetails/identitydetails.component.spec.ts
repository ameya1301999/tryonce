import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentitydetailsComponent } from './identitydetails.component';

describe('IdentitydetailsComponent', () => {
  let component: IdentitydetailsComponent;
  let fixture: ComponentFixture<IdentitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentitydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
