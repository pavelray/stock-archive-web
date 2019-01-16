import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPerformingStockTableComponent } from './best-performing-stock-table.component';

describe('BestPerformingStockTableComponent', () => {
  let component: BestPerformingStockTableComponent;
  let fixture: ComponentFixture<BestPerformingStockTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPerformingStockTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPerformingStockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
