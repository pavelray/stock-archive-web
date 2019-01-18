import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = "http://local.stockarchiveapi.com/api/companies";
  
  constructor(private http: Http) {
  }

  getCompanies(){
    return  this.http.get(this.url);
  }
  
}
