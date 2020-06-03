import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "../model/branch";

@Component({
  selector: 'app-display-branch',
  templateUrl: './display-branch.component.html',
  styleUrls: ['./display-branch.component.css']
})
export class DisplayBranchComponent implements OnInit {

  private _branch: Branch;

  get branch(): Branch {
    return this._branch;
  }

  @Input()
  set branch(value: Branch) {
    this._branch = value;
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
