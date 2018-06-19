import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantList } from './model/restaurant-list';
import { RestaurantsService } from './services/restaurants.service';

@Component({
  selector: 'dr-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurantList: RestaurantList;
  private params = {
    "pageSize": 12,
    "page": 1,
    "filter": {
      "priceFrom": 1,
      "priceTo": 5,
      "cuisine": "",
    },
    "sort": "rating",
    "sortDirection": "desc"
  };

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateRestaurants();
    this.route.params.subscribe( params => {
      if(params['cuisine'] == 'all') {
        this.updateRestaurants({"filter": {"cuisine": ''}});
      } else {
        this.updateRestaurants({"filter": {"cuisine": params['cuisine']}});
      }
    });
  }

  updateRestaurants(params?) {
    if(params) {
      this.params.page = params.page || this.params.page;
      if(params.filter) {
        this.params.filter.priceFrom = params.filter.priceFrom != undefined ? params.filter.priceFrom : this.params.filter.priceFrom;
        this.params.filter.priceTo = params.filter.priceTo != undefined ? params.filter.priceTo : this.params.filter.priceTo;
        this.params.filter.cuisine = params.filter.cuisine != undefined ? params.filter.cuisine : this.params.filter.cuisine;
        this.params.page = 1;
      }
    }
    this.restaurantsService.getData(this.params).subscribe(res => this.restaurantList = res);
  }
}

