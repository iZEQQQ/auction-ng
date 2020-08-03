import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";
import {Branch} from "../model/branch";
import {BranchService} from "../branch.service";

@Component({
  selector: 'app-category-edit-view',
  templateUrl: './category-edit-view.component.html',
  styleUrls: ['./category-edit-view.component.css']
})
export class CategoryEditViewComponent implements OnInit {

  private _branch: Branch;

  private _category: Category;

  get branch(): Branch {
    return this._branch;
  }

  get category(): Category {
    return this._category;
  }

  constructor(private root: ActivatedRoute,
              private branchService: BranchService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    let branchId = this.root.snapshot.paramMap.get('branchId')
    this.branchService.getBranch(Number(branchId)).subscribe(branch => {
      this._branch = branch;
      let categoryId = this.root.snapshot.paramMap.get('categoryId');
      this.categoryService.getCategory(Number(branchId), Number(categoryId)).subscribe(category => {
        this._category = category;
      });
    });
  }

  onSubmit() {
    this.categoryService.putCategory(this._branch, this._category);
  }

}
