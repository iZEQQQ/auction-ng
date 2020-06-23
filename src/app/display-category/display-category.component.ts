import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../model/category";

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {

  private _category:Category;

  get category(): Category {
    return this._category;
  }

  @Input()
  set category(value: Category) {
    this._category = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
