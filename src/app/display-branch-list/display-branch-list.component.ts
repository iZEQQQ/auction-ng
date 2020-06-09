import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "../model/branch";

@Component({
  selector: 'app-display-branch-list',
  templateUrl: './display-branch-list.component.html',
  styleUrls: ['./display-branch-list.component.css']
})
export class DisplayBranchListComponent implements OnInit {

  private _branches: Branch[];

  get branches(): Branch[] {
    return this._branches;
  }

  @Input()
  set branches(value: Branch[]) {
    this._branches = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
