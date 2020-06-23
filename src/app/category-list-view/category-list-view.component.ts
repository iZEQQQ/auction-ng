import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BranchService} from "../branch.service";
import {Category} from "../model/category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-list-view',
  templateUrl: './category-list-view.component.html',
  styleUrls: ['./category-list-view.component.css']
})
export class CategoryListViewComponent implements OnInit {

  private _categories: Category[] = [];

  get categories(): Category[] {
    return this._categories;
  }

  constructor(private root: ActivatedRoute, private service: CategoryService) {
  }

  ngOnInit(): void {
    this._categories = [];
    let idBranch = this.root.snapshot.paramMap.get('id')
    this.service.findCategories(Number(idBranch)).subscribe(categories => {
      categories.forEach(idCategory => {
        this.service.getCategory(Number(idBranch), idCategory).subscribe(category => {
          this._categories.push(category);
        })
      })
    });
  }

}
