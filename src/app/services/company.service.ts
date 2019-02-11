import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService  extends DataService {

  constructor(http: Http) {
    super('http://local.stockarchiveapi.com/api/companies',http)
  }

}
