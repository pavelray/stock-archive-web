import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { CompanyAutofillComponent } from './company-autofill/company-autofill.component';
import {MatTableModule,MatProgressSpinnerModule,MatPaginatorModule,MatToolbarModule} from '@angular/material'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';


import { CompanyService } from './services/company.service';
import { StockTableComponent } from './stock-table/stock-table.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyAutofillComponent,
    StocksComponent,
    BgNavbarComponent,
    CompanyAutofillComponent,
    StockTableComponent,
    BodyComponent
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
   

  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
