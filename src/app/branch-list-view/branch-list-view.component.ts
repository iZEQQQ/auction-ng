import {Component, OnInit} from '@angular/core';
import {Branch} from "../model/branch";
import {BranchService} from "../branch.service";

@Component({
  selector: 'app-branch-list-view',
  templateUrl: './branch-list-view.component.html',
  styleUrls: ['./branch-list-view.component.css']
})
export class BranchListViewComponent implements OnInit {

  private _branches: Branch[] = [];

  private service: BranchService;

  get branches(): Branch[] {
    return this._branches;
  }

  constructor(service: BranchService) {
    this.service = service;
  }

  ngOnInit(): void {
    this._branches = [];
    this.service.findBranches().subscribe(branches => {
      branches.forEach(id => {
        this.service.getBranch(id).subscribe(branch => {
          this._branches.push(branch);
        });
      });
    });
  }

}
