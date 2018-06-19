import { Component, OnInit, Input } from '@angular/core';

import { Restaurant} from "../model/restaurant";

@Component({
  selector: 'dr-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurants: Restaurant[];

  constructor() { }

  ngOnInit() {
  }
}
