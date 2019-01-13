import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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

  
}
