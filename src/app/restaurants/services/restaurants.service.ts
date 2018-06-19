import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RestaurantList } from '../model/restaurant-list';
import { MenuList } from '../model/menu-list';


@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getData(params?: any) {
    return this.http.get<RestaurantList>("http://localhost:3000/api/restaurants", {
      params: new HttpParams()
        .set("pageSize", params.pageSize.toString())
        .set("page", params.page.toString())
        .set("filter", JSON.stringify(params.filter))
        .set("sort", params.sort.toString())
        .set("sortDirection", params.sortDirection.toString())
    }).map(res => {
      return new RestaurantList(res);
    });
  }

  getMenu(restaurantId: number) {
    return this.http.get<RestaurantList>("http://localhost:3000/api/restaurants/" + restaurantId + "/menus")
      .map(res => {
        return new MenuList(res);
      });
  }
}