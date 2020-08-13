import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {Branch} from "../model/branch";
import {ActivatedRoute} from "@angular/router";
import {BranchService} from "../branch.service";
import {CategoryService} from "../category.service";
import {Auction} from "../model/auction";
import {AuctionService} from "../auction.service";

@Component({
  selector: 'app-auction-list-view',
  templateUrl: './auction-list-view.component.html',
  styleUrls: ['./auction-list-view.component.css']
})
export class AuctionListViewComponent implements OnInit {

  private _auctions: Auction[] = [];

  private _category: Category;

  private _branch: Branch;

  get branch(): Branch {
    return this._branch;
  }

  get category(): Category {
    return this._category;
  }

  get auctions(): Auction[] {
    return this._auctions;
  }


  constructor(private root: ActivatedRoute,
              private branchService: BranchService,
              private categoryService: CategoryService,
              private auctionService: AuctionService) {
  }

  ngOnInit(): void {

    let idBranch = this.root.snapshot.paramMap.get('branchId')
    let idCategory = this.root.snapshot.paramMap.get('categoryId')
    this.branchService.getBranch(Number(idBranch)).subscribe(branch => {
      this._branch = branch;
    });
    this.categoryService.getCategory(Number(idBranch), Number(idCategory)).subscribe(category => {
      this._category = category;
    });
    this.auctionService.getAuctions(Number(idBranch), Number(idCategory)).subscribe(auctions => {
      this.fetchAuctions(auctions, Number(idCategory), Number(idBranch));
    });
  }


  private fetchAuctions(auctions: number[], categoryId, branchId: number): void {
    let auctionId = auctions.shift();
    if (auctionId) {
      this.auctionService.getAuction(Number(branchId), Number(categoryId), auctionId).subscribe(auction => {
        this._auctions.push(auction);
        this.fetchAuctions(auctions, categoryId, branchId);
      })
    }
  }


}
