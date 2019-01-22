import { Component, OnInit } from '@angular/core';

const data = {
  "chart": {
    "caption": "Expense Analysis",
    "subcaption": "ACME Inc.",
    "xaxisname": "Region",
    "yaxisname": "Amount (In USD)",
    "numberprefix": "$",
    "exportenabled": "1",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "East"
        },
        {
          "label": "West"
        },
        {
          "label": "South"
        },
        {
          "label": "North"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Actual Expenses",
      "data": [
        {
          "value": "1441290"
        },
        {
          "value": "855912"
        },
        {
          "value": "911404"
        },
        {
          "value": "648136"
        }
      ]
    },
    {
      "seriesname": "Budgeted Expenses",
      "renderas": "line",
      "data": [
        {
          "value": "1297430"
        },
        {
          "value": "776485"
        },
        {
          "value": "685352"
        },
        {
          "value": "726791"
        }
      ]
    },
    {
      "seriesname": "Unknown liabilities",
      "renderas": "area",
      "showanchors": "0",
      "data": [
        {
          "value": "143860"
        },
        {
          "value": "79427"
        },
        {
          "value": "226052"
        },
        {
          "value": "78655"
        }
      ]
    }
  ]
};

@Component({
  selector: 'stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'scrollcombidy2d';
  dataFormat = 'json';
  dataSource = data;
  constructor() { }

  ngOnInit() {
    console.log(data);
  }
}
