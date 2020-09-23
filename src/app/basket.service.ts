import {Injectable} from '@angular/core';
import {Auction} from "./model/auction";
import {PostBasketItemRequest} from "./dto/post-basket-item-request";
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
    this.http.post('http://localhost:8080/api/users/Jax/basket/items/', req)
      .subscribe(
        value => console.log(value),
        error => console.log(error))

  }


//  TODO dodac posty do categori branchy i aukcji reszte put delete do basketu i metody pobierania na elementy koszyka i wywolac to z angulara


}
