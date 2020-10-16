import {Injectable} from '@angular/core';
import {Auction} from "./model/auction";
import {PostBasketItemRequest} from "./dto/basket/post-basket-item-request";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetBasketItemsResponse} from "./dto/basket/get-basket-items-response";
import {map} from "rxjs/operators";
import {BasketItem} from "./model/basket-item";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  postBasketItem(auction: Auction): void {
    let req = new PostBasketItemRequest();
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    req.auctionId = auction.id;
    req.quantity = 1;
    this.http.post('http://localhost:8080/api/users/Jax/basket/items/', req, {withCredentials: true})
      .subscribe(
        value => console.log(value),
        error => console.log(error));

  }

  getBasketItem(): Observable<BasketItem[]> {
    return this.http.get<GetBasketItemsResponse>('http://localhost:8080/api/users/Jax/basket/items/', {withCredentials: true})
      .pipe(map(value => {
        let basketItems: BasketItem[] = [];
        value.items.forEach(item => {
          let basketItem: BasketItem = new BasketItem();
          basketItem.auctionName = item.auctionName;
          basketItem.basketElementId = item.basketElementId;
          basketItem.price = item.price;
          basketItem.quantity = item.quantity;
          basketItems.push(basketItem);
        });
        return basketItems;
      }));
  }


}
