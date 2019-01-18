import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {CompanyAutofillComponent } from './company-autofill/company-autofill.component';
import {MatTableModule,MatProgressSpinnerModule,MatPaginatorModule,MatToolbarModule} from '@angular/material'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';


import { CompanyService } from './services/company.service';
import { StockTableComponent } from './stock-table/stock-table.component';
import { BodyComponent } from './body/body.component';
import { BestPerformingStockTableComponent } from './best-performing-stock-table/best-performing-stock-table.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:symbol',
    component: SearchComponent
  },
  {
    path: 'search/:symbol/:year',
    component: SearchComponent
  },  
  {
      path: 'search',
      component: SearchComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyAutofillComponent,
    StocksComponent,
    BgNavbarComponent,
    CompanyAutofillComponent,
    StockTableComponent,
    BodyComponent,
    BestPerformingStockTableComponent,
    StockDetailsComponent,
    HomeComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule
    ,HttpModule
    ,BrowserAnimationsModule
    ,FormsModule
    ,ReactiveFormsModule
    ,MatAutocompleteModule
    ,MatFormFieldModule
    ,MatInputModule
    ,MatSelectModule
    ,MatTabsModule
    ,MatTableModule
    ,MatProgressSpinnerModule
    ,MatPaginatorModule
    ,HttpClientModule
    ,MatToolbarModule
    ,RouterModule.forRoot(appRoutes)
  ],
  
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
