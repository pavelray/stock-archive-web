import { CompanyService } from './../services/company.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { StockService } from '../services/stock.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {  
  stockList : any [];
  displayedColumns: string[] = ['Date', 'Symbol', 'High', 'Low', 'Open','Close', 'Volume'];
  name :any;
  dataSource : MatTableDataSource<any[]>;

  companyName$ = this.companyService.data$;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : StockService, private companyService : CompanyService) { 
    
  }

  ngOnInit() {
    
    this.companyName$.subscribe(data=> 
      {
          if(data != undefined)
          {
            this.service.getStocks(data).subscribe(respose=>{
              this.stockList = respose.json();
              this.dataSource=new MatTableDataSource<any>(this.stockList);
              this.dataSource.paginator = this.paginator;
            });
          }
      });
    
    
    
  }

}

