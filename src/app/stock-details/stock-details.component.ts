import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute } from '@angular/router';
import { StockTableComponent } from '../stock-table/stock-table.component'; 

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

  @ViewChild(StockTableComponent) stockTable: StockTableComponent;

  constructor( private route: ActivatedRoute,private companyService : CompanyService,) { }

  ngOnInit() {    
      this.route.paramMap.subscribe(param => {
         this.selectedSymbol = param.get("symbol");
         this.selectedyear = param.get("year");
      });      
  }

  getStocksByRange()
  {
     console.log(this.fromDate);
     console.log(this.toDate);
    this.stockTable.getStocksByRange(this.selectedSymbol,this.fromDate,this.toDate);

  }
  
}
