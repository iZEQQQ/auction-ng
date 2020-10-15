import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BranchService} from "../branch.service";
import {Branch} from "../model/branch";

@Component({
  selector: 'app-branch-edit-view',
  templateUrl: './branch-edit-view.component.html',
  styleUrls: ['./branch-edit-view.component.css']
})
export class BranchEditViewComponent implements OnInit {

  private _branch: Branch;

  get branch(): Branch {
    return this._branch;
  }

  constructor(private root: ActivatedRoute, private service: BranchService) {
  }

  ngOnInit(): void {
    let id = this.root.snapshot.paramMap.get('id')
    this.service.getBranch(Number(id)).subscribe(branch => {
      this._branch = branch;
    });
  }
//TODO  if branch id { put}else {post}
  onSubmit() {
    this.service.putBranch(this._branch);
  }
}
