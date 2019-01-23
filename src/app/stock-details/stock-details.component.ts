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
  stockData:any;
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
      this.populateStockTable();
      this.populateChart();
    });
    
  }

  getStocksByRange()
  {
    this.stockData =  this.stockData.filter(data=> new Date(data.Date) >=  new Date(this.fromDate) && new Date(data.Date) <= new Date(this.toDate));
    this.populateStockTable();
    this.populateChart();    
  }

  populateStockTable()
  {
    this.stockTable.populateStockTableData(this.stockData);
  }

  populateChart()
  {
    this.stockChart.populateChartData(this.stockData, this.selectedSymbol,this.chartSubcaption);
  }
  
  getLastOneMonthData()
  {
    
    this.stockData = this.stockData.filter(data=> new Date(data.Date).getFullYear() == 2016);
    console.log( this.stockData);

  }

}
