import { Company } from './../interfaces/Company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  companyList : Company[];
  selectedSymbol : string;
  selectedyear : string;
  constructor(private service : CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.service.getCompanies().subscribe(respose=>{
      this.companyList = respose.json();

      this.route.paramMap.subscribe(param => {
         this.selectedSymbol = param.get("symbol");
         this.selectedyear = param.get("year");
      })
      
    });
  }
  
}
