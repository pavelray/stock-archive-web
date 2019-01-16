import { Component, OnInit,ViewChild } from '@angular/core';
import { StockService } from '../services/stock.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'best-performing-stock-table',
  templateUrl: './best-performing-stock-table.component.html',
  styleUrls: ['./best-performing-stock-table.component.css']
})
export class BestPerformingStockTableComponent implements OnInit {
  stockList : any [];
  displayedColumns: string[] = ['Symbol', 'Return %'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : StockService) { 
    
  }

  ngOnInit() {
          this.service.getBestPerformingStock("2016").subscribe(respose=>{
        this.stockList = respose.json();
      });
  }
     
 }


