import { Stock } from './../interfaces/Stock';
import { map, filter } from 'rxjs/operators';
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
  selectedyear : number;
  fromDate: string;
  toDate:string;
  stockData:Stock[];
  chartSubcaption:string;

  yearList: any;
  selectedYear: any;

  @ViewChild(StockTableComponent) stockTable: StockTableComponent;
  @ViewChild(StockChartComponent) stockChart: StockChartComponent;
  

  constructor( private route: ActivatedRoute, private companyService : CompanyService, private service : StockService) { }

  ngOnInit() {    
    this.route.paramMap.subscribe(param => {
      this.selectedSymbol = param.get("symbol");
      this.selectedyear = +param.get("year");
         
      this.getStocksBySymbol(this.selectedSymbol, this.selectedyear);
    }); 
  }

  getStocksBySymbol(selectedSymbol: string, selectedyear: number){
    
    this.service.getStocks(selectedSymbol).subscribe(respose=>{
    this.stockData =  respose.json();
    
      if(selectedyear != undefined && selectedyear > 0)
      {
        this.stockData =  this.stockData.filter(data=> new Date(data.Date).getFullYear() == selectedyear);
      }
      this.populateStockTable(this.stockData);
      this.populateChart(this.stockData);
    });
    
  }

  getStocksByRange()
  {
    this.stockData =  this.stockData.filter(data=> new Date(data.Date) >=  new Date(this.fromDate) && new Date(data.Date) <= new Date(this.toDate));
    this.populateStockTable(this.stockData);
    this.populateChart(this.stockData);    
  }

  populateStockTable(data:any)
  {
    this.stockTable.populateStockTableData(data);
  }

  populateChart(data:any)
  {
    this.stockChart.populateChartData(data, this.selectedSymbol,this.chartSubcaption);
  }
  
  getLastOneMonthData()
  {
    let latestDate =  new Date(Math.max.apply(null, this.stockData.map(function(e) {
      return new Date(e.Date);
    })));
    let startDate = new Date((latestDate.getMonth()+1)+'/01'+"/"+latestDate.getFullYear());
    
    let data =  this.stockData.filter(data=> new Date(data.Date) >= startDate && new Date(data.Date) <= latestDate);
    this.populateStockTable(data);
    this.populateChart(data);
    
  }

  getLastThreeMonthData()
  {
    let latestDate =  new Date(Math.max.apply(null, this.stockData.map(function(e) {
      return new Date(e.Date);
    })));
    let startDate = new Date((latestDate.getMonth()-1)+'/01'+"/"+latestDate.getFullYear());
    
    let data =  this.stockData.filter(data=> new Date(data.Date) >= startDate && new Date(data.Date) <= latestDate);
    this.populateStockTable(data);
    this.populateChart(data);
    
  }

  getLastSixMonthData()
  {
    let latestDate =  new Date(Math.max.apply(null, this.stockData.map(function(e) {
      return new Date(e.Date);
    })));
    let startDate = new Date((latestDate.getMonth()-5)+'/01'+"/"+latestDate.getFullYear());
    
    let data =  this.stockData.filter(data=> new Date(data.Date) >= startDate && new Date(data.Date) <= latestDate);
    this.populateStockTable(data);
    this.populateChart(data);
    
  }

  getLastOneYearData()
  {
    let latestDate =  new Date(Math.max.apply(null, this.stockData.map(function(e) {
      return new Date(e.Date);
    })));
    let year = +latestDate.getFullYear();
    
    let data =  this.stockData.filter(data=> new Date(data.Date).getFullYear() == year);
    this.populateStockTable(data);
    this.populateChart(data);
    
  }

  getLastThreeYearData()
  {
    this.service.getStocks(this.selectedSymbol).subscribe(respose=>{
      this.stockData =  respose.json();

      let latestDate =  new Date(Math.max.apply(null, this.stockData.map(function(e) {
        return new Date(e.Date);
      })));
      let year = +latestDate.getFullYear()-2;
      
      let data =  this.stockData.filter(data=> new Date(data.Date).getFullYear() >= year);
      this.populateStockTable(data);
      this.populateChart(data);
    });
  }

  getLastFiveYearData()
  {
    this.service.getStocks(this.selectedSymbol).subscribe(respose=>{
      this.stockData =  respose.json();

      let latestDate =  new Date(Math.max.apply(null, this.stockData.map(function(e) {
        return new Date(e.Date);
      })));
      let year = +latestDate.getFullYear()-4;
      
      let data =  this.stockData.filter(data=> new Date(data.Date).getFullYear() >= year);
      this.populateStockTable(data);
      this.populateChart(data);
    });
    
  }

  getAllData()
  {
    this.service.getStocks(this.selectedSymbol).subscribe(respose=>{
      let data  =  respose.json();
      this.populateStockTable(data);
      this.populateChart(data);
    });
  }

}
