import {Component, Input, OnInit} from '@angular/core';
import {Auction} from "../model/auction";
import {Category} from "../model/category";
import {Branch} from "../model/branch";

@Component({
  selector: 'app-display-auction-list',
  templateUrl: './display-auction-list.component.html',
  styleUrls: ['./display-auction-list.component.css']
})
export class DisplayAuctionListComponent implements OnInit {

  private _auctions: Auction[];

  private _category: Category;

  private _branch: Branch;

  get auctions(): Auction[] {
    return this._auctions;
  }

  @Input()
  set auctions(value: Auction[]) {
    this._auctions = value;
  }

  get category(): Category {
    return this._category;
  }

  @Input()
  set category(value: Category) {
    this._category = value;
  }

  get branch(): Branch {
    return this._branch;
  }

  @Input()
  set branch(value: Branch) {
    this._branch = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
