import { CompanyService } from './../services/company.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { StockService } from '../services/stock.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {  
  
  selectedSymbol : string;
  selectedyear:string;
  stockList : any [];
  displayedColumns: string[] = ['Date', 'Symbol', 'High', 'Low', 'Open','Close', 'Volume'];
  name :any;
  dataSource : MatTableDataSource<any[]>;

  companyName$ = this.companyService.data$;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : StockService, private companyService : CompanyService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(param => {
      this.selectedSymbol = param.get("symbol");
      this.selectedyear = param.get("year");
      this.getStocksBySymbol(this.selectedSymbol);
    });
  
    this.companyName$.subscribe(data=> 
    {
        if(data != undefined)
        {
          this.selectedSymbol = data;
          this.getStocksBySymbol(this.selectedSymbol);
        }         
    });
    
    
    
  }

  getStocksBySymbol(symbol)
  {
    this.service.getStocks(symbol).subscribe(respose=>{
      this.stockList = respose.json();
      this.dataSource=new MatTableDataSource<any>(this.stockList);
      this.dataSource.paginator = this.paginator;
    });
  }

}

