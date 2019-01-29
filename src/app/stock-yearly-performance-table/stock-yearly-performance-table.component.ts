import { Company } from './../interfaces/Company';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Stock } from '../interfaces/Stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-yearly-performance-table',
  templateUrl: './stock-yearly-performance-table.component.html',
  styleUrls: ['./stock-yearly-performance-table.component.css']
})
export class StockYearlyPerformanceTableComponent implements OnInit {
  
  stockList : Stock [];
  @Input() selectedSymbol : string;

  displayedColumns: string[] = ['Date', 'Symbol', 'High', 'Low', 'Open','Close', 'Volume'];
  dataSource : MatTableDataSource<any[]>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: StockService) { }

  ngOnInit() {
    this.service.getStocks(this.selectedSymbol).subscribe(result=> {
      this.stockList = result.json();
      this.dataSource=new MatTableDataSource<any>(this.stockList);
      this.dataSource.paginator = this.paginator;
      this.paginator._changePageSize(this.paginator.pageSize);
    });
  }

}
