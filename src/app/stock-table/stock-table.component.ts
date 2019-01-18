import { CompanyService } from './../services/company.service';
import { Component, OnInit,ViewChild, Input } from '@angular/core';
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

  @Input() fromDate:string;
  @Input() toDate:string;

  dataSource : MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : StockService, private companyService : CompanyService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.selectedSymbol = param.get("symbol");
      this.selectedyear = param.get("year");
      
      if(this.selectedyear == "" || this.selectedyear == null || this.selectedyear == undefined)
      {
        this.getStocksBySymbol(this.selectedSymbol);
      }
      else
      {
        this.getStocksByYear(this.selectedSymbol,this.selectedyear);
      }
    }); 
    
  }

  getStocksByYear(selectedSymbol: string, selectedyear: string){
    this.service.getStocksByYear(selectedSymbol,selectedyear).subscribe(respose=>{
      this.stockList = respose.json();
      this.dataSource=new MatTableDataSource<any>(this.stockList);
      this.dataSource.paginator = this.paginator;
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

  getStocksByRange(selectedSymbol:string, fromDate:string, toDate:string)
  {

    this.service.getStocksByDateRange(selectedSymbol,fromDate,toDate).subscribe(respose=>{
        this.stockList = respose.json();
        console.log(this.stockList);
        this.dataSource=new MatTableDataSource<any>(this.stockList);
        this.dataSource.paginator = this.paginator;
        this.paginator._changePageSize(this.paginator.pageSize); 
      });
  }

}

