import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";
import {Branch} from "../model/branch";

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

  constructor(private root: ActivatedRoute, private service: CategoryService) {
  }

  ngOnInit(): void {
    let branchId = this.root.snapshot.paramMap.get('branchId')
    this.service.getBranch(Number(branchId)).subscribe(branch => {
      let categoryId = this.root.snapshot.paramMap.get('categoryId')
      this.service.getCategory(branchId, Number(categoryId)).subscribe(category => {
        this._category = category;
      });
    });
  }

  onSubmit(){
    this.service.putCategory(this._category);
  }

}
