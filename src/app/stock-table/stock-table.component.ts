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
  chartLabel:any;
  volumeData:any;
  openingPriceData:any;
  closePriceData: any;
  chartSubcaption:string;

  @Input() fromDate:string;
  @Input() toDate:string;

  dataSource : MatTableDataSource<any[]>;

  type = 'scrollcombidy2d';
  dataFormat = 'json';
  chartDataSource = this.chart;
  width = 1000;
  height = 600;
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
      this.chartSubcaption = "Of "+selectedyear; 
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

  populateStockTableData(stockData: any) {
    this.stockList = stockData;
    this.dataSource=new MatTableDataSource<any>(this.stockList);
    this.dataSource.paginator = this.paginator;
    this.paginator._changePageSize(this.paginator.pageSize);
    //this.populateChartData();
  }

  getStocksByRange(selectedSymbol:string, fromDate:string, toDate:string)
  {

    this.service.getStocksByDateRange(selectedSymbol,fromDate,toDate).subscribe(respose=>{
        this.stockList = respose.json();
       
        this.dataSource=new MatTableDataSource<any>(this.stockList);
        this.dataSource.paginator = this.paginator;
        this.paginator._changePageSize(this.paginator.pageSize);
        this.chartSubcaption = "From "+fromDate+" To "+toDate; 
        this.populateChartData();
      });
  }

  populateChartData()
  { 
    this.chartLabel = new Array();
    this.volumeData = new Array();
    this.openingPriceData = new Array();
    this.closePriceData = new Array();

    this.stockList.forEach(i=>{ 
      
      this.volumeData.push({
        "value":i.Volume
      });

      this.closePriceData.push({
        "value":i.Close
      });

      this.openingPriceData.push({
        "value":i.Open
      });

      this.chartLabel.push({
        "label":this.datepipe.transform(i.Date, 'dd-MM-yyyy')
      });

    });
    
    this.chart = {
        "chart": {
          "caption": this.selectedSymbol,
          "subcaption": this.chartSubcaption,
          "yaxisname": "Volume Sold",
          "syaxisname": "Stock Price",
          "labeldisplay": "rotate",
          "snumberprefix": "$",
          "scrollheight": "10",
          "numvisibleplot": "30",
          "drawcrossline": "1",
          "theme": "fusion"
        },
        "categories": [
          {
            "category": this.chartLabel
          }
        ],
        "dataset": [
          {
            "seriesname": "Total Volume",
            "plottooltext": "Volume: $dataValue",
            "data": this.volumeData
          },
          {
            "seriesname": "Closing Price",
            "parentyaxis": "S",
            "renderas": "line",
            "plottooltext": "Close $dataValue",
            "showvalues": "0",
             "data": this.closePriceData
          },
          {
            "seriesname": "Opening Price",
            "parentyaxis": "S",
            "renderas": "line",
            "plottooltext": "Open $dataValue",
            "showvalues": "0",
             "data": this.openingPriceData
          }
        ]
      };
      this.chart.bgColor = "#efefef";
      this.chartDataSource = this.chart;
      
  }

}

