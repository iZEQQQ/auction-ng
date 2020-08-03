import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {Branch} from "../model/branch";

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {

  private _category: Category;

  private _branch: Branch;

  get category(): Category {
    return this._category;
  }

  @Input()
  set branch(value: Branch) {
    this._branch = value;
  }

  get branch(): Branch {
    return this._branch;
  }

  @Input()
  set category(value: Category) {
    this._category = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
