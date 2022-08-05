import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinListItemComponent } from './coin-list/coin-list-item/coin-list-item.component';
import { SortDirective } from './directive/sort.directive';
import { CoinDetailComponent } from './coin-list/coin-list-item/coin-detail/coin-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './coin-list/coin-list-item/coin-detail/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoinListComponent,
    CoinListItemComponent,
    SortDirective,
    CoinDetailComponent,
    NotFoundComponent,
    HeaderComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
