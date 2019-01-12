import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Company } from '../interfaces/Company';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'company-autofill',
  templateUrl: './company-autofill.component.html',
  styleUrls: ['./company-autofill.component.css']
})
export class CompanyAutofillComponent implements OnInit {
  query: string;
  selectedCompany : Company;
  companyList: Company[];
  myControl = new FormControl();
  filteredOptions: Observable<Company[]>;
  companyName$ = this.service.data$;

  @Output() change = new EventEmitter();

  constructor(private service : CompanyService) { 
    
  }

  ngOnInit() {
    this.service.getCompanies().subscribe(respose=>{
      this.companyList = respose.json();
      
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Company>(''),
        map(value => typeof value === 'string' ? value : value.Symbol),
        map(symbol => symbol ? this._filter(symbol) : this.companyList.slice())
      );
    });
  }

  displayFn(company?: Company): string | undefined {
    this.selectedCompany = company ? company : undefined;
    return company ? company.Symbol : undefined;
    
  }

  private _filter(symbol: string): Company[] {
    const filterValue = symbol.toLowerCase();

    return this.companyList.filter(option => option.Symbol.toLowerCase().indexOf(filterValue) === 0);
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.service.setSelectedCompanyName(event.option.value.Symbol);
    this.change.emit(event.option.value.Symbol);
    }
}
