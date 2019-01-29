import { Stock } from './../interfaces/Stock';
import { CompanyService } from './../services/company.service';
import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { StockService } from '../services/stock.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {
   
  selectedSymbol : string;
  selectedyear:string;
  stockList : Stock [];
  displayedColumns: string[] = ['Date', 'Symbol', 'High', 'Low', 'Open','Close', 'Volume'];
  name :any;
 
  dataSource : MatTableDataSource<any[]>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 
    
  }

  ngOnInit() {
   
  }

  populateStockTableData(stockData: Stock[]) {
    this.stockList = stockData;
    this.dataSource=new MatTableDataSource<any>(this.stockList);
    this.dataSource.paginator = this.paginator;
    this.paginator._changePageSize(this.paginator.pageSize);
    
  }

  calculateYearlyPerformance(stockData: Stock[])
  {
      

  }
}

