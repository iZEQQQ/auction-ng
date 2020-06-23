import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../model/category";

@Component({
  selector: 'app-display-category-list',
  templateUrl: './display-category-list.component.html',
  styleUrls: ['./display-category-list.component.css']
})
export class DisplayCategoryListComponent implements OnInit {

  private _categories:Category[];

  @Input()
  set categories(value: Category[]) {
    this._categories = value;
  }

  get categories(): Category[] {
    return this._categories;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
