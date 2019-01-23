import { Observable, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute } from '@angular/router';
import { StockTableComponent } from '../stock-table/stock-table.component'; 
import { StockService } from '../services/stock.service';
import { StockChartComponent } from '../stock-chart/stock-chart.component';

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
  chartSubcaption:string;

  subject = new Subject<any>();


  @ViewChild(StockTableComponent) stockTable: StockTableComponent;
  @ViewChild(StockChartComponent) stockChart: StockChartComponent;

  constructor( private route: ActivatedRoute, private companyService : CompanyService, private service : StockService) { }

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
      this.stockData =  respose.json();
      this.populateStockTable();
      this.populateChart();
    });
    
  }

  getStocksBySymbol(selectedSymbol: string){
    
    this.service.getStocks(selectedSymbol).subscribe(respose=>{
      this.stockData =  respose.json();
      this.populateStockTable();
      this.populateChart();
     });
    
  }

  getStocksByRange()
  {
    this.service.getStocksByDateRange(this.selectedSymbol,this.fromDate,this.toDate).subscribe(respose=>{
      this.stockData = respose.json();
      this.chartSubcaption = "From "+this.fromDate+" To "+this.toDate; 
      this.populateStockTable();
      this.populateChart();
    });
    //this.stockTable.getStocksByRange(this.selectedSymbol,this.fromDate,this.toDate);
  }

  populateStockTable()
  {
    //console.log(this.stockData);
    this.stockTable.populateStockTableData(this.stockData);
  }

  populateChart()
  {
    console.log(this.stockData);
    this.stockChart.populateChartData(this.stockData, this.selectedSymbol,this.chartSubcaption);
  }
  
}
