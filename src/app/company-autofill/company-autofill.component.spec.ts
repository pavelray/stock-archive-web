import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAutofillComponent } from './company-autofill.component';

describe('CompanyAutofillComponent', () => {
  let component: CompanyAutofillComponent;
  let fixture: ComponentFixture<CompanyAutofillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAutofillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAutofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
