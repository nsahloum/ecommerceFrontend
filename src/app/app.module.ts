import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {RouterModule} from "@angular/router";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        NavBarComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
