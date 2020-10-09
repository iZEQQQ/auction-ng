import {Component, OnInit} from '@angular/core';
import {BasketService} from "../basket.service";
import {BasketItem} from "../model/basket-item";

@Component({
  selector: 'app-display-basket',
  templateUrl: './display-basket.component.html',
  styleUrls: ['./display-basket.component.css']
})
export class DisplayBasketComponent implements OnInit {

  private basketService: BasketService;

  private _basketItems: BasketItem[];

  constructor(basketService: BasketService) {
    this.basketService = basketService;
  }

  ngOnInit(): void {
    this.basketService.getBasketItem().subscribe(value => {
      this._basketItems = value;
    });
  }

  get basketItems(): BasketItem[] {
    return this._basketItems;
  }


}
