import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockYearlyPerformanceTableComponent } from './stock-yearly-performance-table.component';

describe('StockYearlyPerformanceTableComponent', () => {
  let component: StockYearlyPerformanceTableComponent;
  let fixture: ComponentFixture<StockYearlyPerformanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockYearlyPerformanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockYearlyPerformanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
