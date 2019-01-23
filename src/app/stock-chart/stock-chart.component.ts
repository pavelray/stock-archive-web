import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
  
  stockList : any [];
  chart :any;
  chartLabel:any;
  volumeData:any;
  openingPriceData:any;
  closePriceData: any;
  chartSubcaption:string;

  type = 'scrollcombidy2d';
  dataFormat = 'json';
  chartDataSource = this.chart;
  width = 1000;
  height = 600;

  constructor(public datepipe: DatePipe) { }

  ngOnInit() {
    
  }

  populateChartData(stockData: any, selectedSymbol: string , chartSubCaption:string)
  { 
    this.stockList = stockData;
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
          "caption": selectedSymbol,
          "subcaption": chartSubCaption,
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
      this.chartDataSource = this.chart;
  }
}
