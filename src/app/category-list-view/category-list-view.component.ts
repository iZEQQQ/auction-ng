import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BranchService} from "../branch.service";
import {Category} from "../model/category";
import {CategoryService} from "../category.service";
import {Branch} from "../model/branch";

@Component({
  selector: 'app-category-list-view',
  templateUrl: './category-list-view.component.html',
  styleUrls: ['./category-list-view.component.css']
})
export class CategoryListViewComponent implements OnInit {

  private _categories: Category[] = [];

  private _branch: Branch;

  get branch(): Branch {
    return this._branch;
  }

  get categories(): Category[] {
    return this._categories;
  }

  constructor(private root: ActivatedRoute,
              private branchService: BranchService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this._categories = [];
    let idBranch = this.root.snapshot.paramMap.get('id')
    this.branchService.getBranch(Number(idBranch)).subscribe(branch => {
      this._branch = branch;
    });
    this.categoryService.getCategories(Number(idBranch)).subscribe(categories => {
      this.fetchCategories(categories, Number(idBranch));

    });
  }

  private fetchCategories(categories: number[], idBranch: number): void {
    let categoryId = categories.shift();
    if (categoryId) {
      this.categoryService.getCategory(Number(idBranch), categoryId).subscribe(category => {
        this._categories.push(category);
        this.fetchCategories(categories, idBranch);
      })
    }
  }
}
