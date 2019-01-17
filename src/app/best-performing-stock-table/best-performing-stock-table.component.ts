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
  yearList : number[];
  selectedYear : number;

  displayedColumns: string[] = ['Symbol', 'Return %'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : StockService) { 
    
  }

  ngOnInit() {
      this.service.getYearsRange().subscribe(response=> {
        this.yearList = response.json();
        this.selectedYear = this.yearList.sort().pop();
         
          this.service.getBestPerformingStock(this.selectedYear).subscribe(respose=>{
            this.stockList = respose.json();
          });
      });
  }
     
 }


