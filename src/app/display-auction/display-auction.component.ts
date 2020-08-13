import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "../model/branch";
import {Category} from "../model/category";
import {Auction} from "../model/auction";

@Component({
  selector: 'app-display-auction',
  templateUrl: './display-auction.component.html',
  styleUrls: ['./display-auction.component.css']
})
export class DisplayAuctionComponent implements OnInit {

  private _branch: Branch;

  private _category: Category;

  private _auction: Auction;

  constructor() { }

  get branch(): Branch {
    return this._branch;
  }

  @Input()
  set branch(value: Branch) {
    this._branch = value;
  }

  get category(): Category {
    return this._category;
  }

  @Input()
  set category(value: Category) {
    this._category = value;
  }

  get auction(): Auction {
    return this._auction;
  }

  @Input()
  set auction(value: Auction) {
    this._auction = value;
  }

  ngOnInit(): void {
  }

}
