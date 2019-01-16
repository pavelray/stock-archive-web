import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url = "http://localhost:64890/api/Stock/";
  
  constructor(private http: Http) {
  }

  getStocks(companyName){
    return  this.http.get(this.url+companyName);
  }

  getBestPerformingStock(year){
    return this.http.get(this.url+"GetBestPerformingCompany/"+year);
  }
  
}
