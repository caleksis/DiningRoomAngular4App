import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/services/restaurants.service';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { PriceComponent } from './restaurants/price/price.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RatingComponent } from './restaurants/rating/rating.component';
import { RestaurantsModalComponent } from './restaurants/restaurants-modal/restaurants-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    PaginationComponent,
    PriceComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    RatingComponent,
    RestaurantsModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [RestaurantsModalComponent],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
