import { Company } from './../interfaces/Company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  companyList : Company;
  constructor(private service : CompanyService) { }

  ngOnInit() {
    this.service.getCompanies().subscribe(respose=>{
      this.companyList = respose.json();
    });
  }

}
