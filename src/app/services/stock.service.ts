import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url = "http://local.stockarchiveapi.com/api/Stock/";
  
  constructor(private http: Http) {
  }

  getYearsRange(){
    return  this.http.get(this.url+"GetYearsRange");
  }

  getStocksByDateRange(sysmbol:string, fromDate:string, toDate:string){
    return  this.http.get(this.url+sysmbol+"/"+fromDate+"/"+toDate);
  }

  getStocks(companyName){
    return  this.http.get(this.url+companyName);
  }

  getStocksByYear(companyName, year){
    return  this.http.get(this.url+companyName+"/"+year);
  }

  getBestPerformingStock(year){
    return this.http.get(this.url+"GetBestPerformingCompany/"+year);
  }
  
}
