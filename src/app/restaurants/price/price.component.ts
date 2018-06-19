import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dr-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Output() priceChange = new EventEmitter();

  filter = {
    priceFrom: 1,
    priceTo: 5
  }

  constructor() { }

  ngOnInit() {
  }

  changePrice() {
    this.priceChange.emit({"filter": this.filter});
  }
}

