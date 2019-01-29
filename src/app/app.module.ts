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
import { DatePipe } from '@angular/common'

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as powercharts from 'fusioncharts/fusioncharts.powercharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { AppComponent } from './app.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { BestPerformingStockTableComponent } from './best-performing-stock-table/best-performing-stock-table.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { HomeComponent } from './home/home.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StockTableComponent } from './stock-table/stock-table.component';


import { CompanyService } from './services/company.service';
import { StockYearlyPerformanceTableComponent } from './stock-yearly-performance-table/stock-yearly-performance-table.component';




// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme,powercharts);

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
    path: 'stock/:symbol',
    component: StockDetailsComponent
  },
  {
    path: 'stock/:symbol/:year',
    component: StockDetailsComponent
  },  
  {
      path: 'stock',
      component: StockDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BgNavbarComponent,
    CompanyAutofillComponent,
    StockTableComponent,
    BestPerformingStockTableComponent,
    StockDetailsComponent,
    HomeComponent,
    StockChartComponent,
    StockYearlyPerformanceTableComponent

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
    ,FusionChartsModule
  ],
  
  providers: [CompanyService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
