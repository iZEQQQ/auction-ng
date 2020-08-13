import {Component, OnInit} from '@angular/core';
import {Branch} from "../model/branch";
import {Category} from "../model/category";
import {Auction} from "../model/auction";
import {ActivatedRoute} from "@angular/router";
import {BranchService} from "../branch.service";
import {CategoryService} from "../category.service";
import {AuctionService} from "../auction.service";

@Component({
  selector: 'app-auction-edit-view',
  templateUrl: './auction-edit-view.component.html',
  styleUrls: ['./auction-edit-view.component.css']
})
export class AuctionEditViewComponent implements OnInit {

  private _branch: Branch;

  private _category: Category;

  private _auction: Auction;

  get branch(): Branch {
    return this._branch;
  }

  get category(): Category {
    return this._category;
  }

  get auction(): Auction {
    return this._auction;
  }

  constructor(private root: ActivatedRoute,
              private branchService: BranchService,
              private categoryService: CategoryService,
              private auctionService: AuctionService) {
  }

  ngOnInit(): void {
    let branchId = this.root.snapshot.paramMap.get('branchId')
    this.branchService.getBranch(Number(branchId)).subscribe(branch => {
      this._branch = branch;
      let categoryId = this.root.snapshot.paramMap.get('categoryId');
      this.categoryService.getCategory(Number(branchId), Number(categoryId)).subscribe(category => {
        this._category = category;
        let auctionId = this.root.snapshot.paramMap.get('auctionId');
        this.auctionService.getAuction(Number(branchId), Number(categoryId), Number(auctionId)).subscribe(auction => {
          this._auction = auction;
        });
      });
    });
  }

  onSubmit() {
    this.auctionService.putAuction(this._branch, this._category, this._auction);
  }

}
