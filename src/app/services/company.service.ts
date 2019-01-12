import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = "http://localhost:64890/api/companies";
  
  private data = new BehaviorSubject("");
  data$:Observable<string> = this.data.asObservable();
  
  
  constructor(private http: Http) {
  }

  getCompanies(){
    return  this.http.get(this.url);
  }

  setSelectedCompanyName(symbol){
    this.data.next(symbol);  
  } 
  
  getCompanyName(symbol)
  {
    
  }
}
