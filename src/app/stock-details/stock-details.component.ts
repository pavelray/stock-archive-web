import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute } from '@angular/router';
import { StockTableComponent } from '../stock-table/stock-table.component'; 
import { StockService } from '../services/stock.service';

@Component({
  selector: 'stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  selectedSymbol : string;
  selectedyear : string;
  fromDate: string;
  toDate:string;
  stockData:any;

  @ViewChild(StockTableComponent) stockTable: StockTableComponent;

  constructor( private route: ActivatedRoute, private companyService : CompanyService, private service : StockService) { }

  ngOnInit() {    
      this.route.paramMap.subscribe(param => {
         this.selectedSymbol = param.get("symbol");
         this.selectedyear = param.get("year");
         
         if(this.selectedyear == "" || this.selectedyear == null || this.selectedyear == undefined)
         {
          this.stockData = this.getStocksBySymbol(this.selectedSymbol);
          console.log(this.stockData);
          this.populateStockTableData();
         }
         else
         {
           this.stockData = this.getStocksByYear(this.selectedSymbol,this.selectedyear);
           console.log(this.stockData);
           this.populateStockTableData();
         }
       }); 
  }
  getStocksByYear(selectedSymbol: string, selectedyear: string): any {
    this.service.getStocksByYear(selectedSymbol,selectedyear).subscribe(respose=>{
      
      this.stockData =  respose.json();
      return this.stockData;
    });
  }
  getStocksBySymbol(selectedSymbol: string): any {
    this.service.getStocks(selectedSymbol).subscribe(respose=>{
     
      this.stockData =  respose.json();
      return this.stockData;
    });
  }

  getStocksByRange()
  {
    this.service.getStocksByDateRange(this.selectedSymbol,this.fromDate,this.toDate).subscribe(respose=>{
      this.stockData = respose.json();
    });
    this.populateStockTableData();
    //this.stockTable.getStocksByRange(this.selectedSymbol,this.fromDate,this.toDate);
  }

  populateStockTableData()
  {
    
    this.stockTable.populateStockTableData(this.stockData);
  }
  
}
