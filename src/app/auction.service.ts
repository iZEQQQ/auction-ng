import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Category} from "./model/category";
import {Branch} from "./model/branch";
import {GetAuctionsResponse} from "./dto/get-auctions-response";
import {Auction} from "./model/auction";
import {GetAuctionResponse} from "./dto/get-auction-response";
import {PutAuctionResponse} from "./dto/put-auction-response";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAuctions(idBranch: number, idCategory: number,): Observable<number[]> {
    return this.http.get<GetAuctionsResponse>('http://localhost:8080/api/branches/' + idBranch + '/categories' + idCategory + '/auctions')
      .pipe(map(value => {
        return value.ids;
      }));
  }

  getAuction(idBranch: number, idCategory: number, idAuction: number): Observable<Auction> {
    return this.http.get<GetAuctionResponse>('http://localhost:8080/api/branches/' + idBranch + '/categories/' + idCategory + '/auctions/' + idAuction)
      .pipe(map(value => {
        let auction: Auction = new Auction();
        auction.quantity = value.quantity;
        auction.price = value.price;
        auction.name = value.name;
        auction.id = value.id;
        return auction;
      }));
  }

  putAuction(branch: Branch, category: Category, auction: Auction) {
    let req = new PutAuctionResponse();
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    req.name = auction.name;
    req.price = auction.price;
    req.quantity = auction.quantity;
    this.http.put<any>('http://localhost:8080/api/branches/' + branch.id + '/categories/' + category.id + '/auctions/' + auction.id, req)
      .subscribe(
        value => console.log(value),
        error => console.log(error)
        // TODO obslozyc jak nie przejdzie
      );
  }
}
