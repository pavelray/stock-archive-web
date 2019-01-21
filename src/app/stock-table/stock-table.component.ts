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
  stockList : any [];
  displayedColumns: string[] = ['Date', 'Symbol', 'High', 'Low', 'Open','Close', 'Volume'];
  name :any;
  chart :any;
  chartData : any;

  @Input() fromDate:string;
  @Input() toDate:string;

  dataSource : MatTableDataSource<any[]>;

  type = 'candlestick';
  dataFormat = 'json';
  chartDataSource = this.chart;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : StockService, private companyService : CompanyService, private route: ActivatedRoute, public datepipe: DatePipe) { 
    
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
      this.populateChartData();
    });
  }

  getStocksBySymbol(symbol)
  {
    this.service.getStocks(symbol).subscribe(respose=>{
      this.stockList = respose.json();
      this.dataSource=new MatTableDataSource<any>(this.stockList);
      this.dataSource.paginator = this.paginator;
      this.populateChartData();
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
        this.populateChartData();
      });
  }

  populateChartData()
  { 
    this.chartData = new Array();
    this.stockList.forEach(i=>{ 
        
      this.chartData.push(
        {
        "tooltext": "<b>{{$DateDataValue}}<br>Open: <b>$OpenDataValue</b><br>Close: <b>$CloseDataValue</b><br>High: <b>$HighDataValue</b><br>Low: <b>$LowDataValue</b><br>Volume: <b>$VolumeDataValue</b>",
        "Open":i.Open,
        "Close":i.Close,
        "High":i.High,
        "Low":i.Low,
        "Volume":i.Volume,
        "Date":this.datepipe.transform(i.Date, 'dd-MM-yyyy'),
        "x":i.High
        
        });
    });
    
    this.chart = {
        "chart": {
          "caption": this.selectedSymbol,
          "numberprefix": "$",
          "pyaxisname": "Price (USD)",
          "theme": "fusion",
          "plotpriceas": "LINE",
          "plotlinethickness": "2.3",
          "showvolumechart": "1",
          "vnumberprefix": "$",
          "vyaxisname": "Volume traded"
        },
        
        "dataset": [
          {
            "data": this.chartData
          }
        ]
      }

      
      
      this.chartDataSource = this.chart;
      console.log(this.chartData);
  }

}

