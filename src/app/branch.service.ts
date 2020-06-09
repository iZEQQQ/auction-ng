import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Branch} from "./model/branch";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor() {
  }

  findBranches(): Observable<Branch[]> {
    return new Observable(subscriber => {
      let branches = [];
      let branch = new Branch();
      branch.id = 1;
      branch.name = 'dzial';
      let branch1 = new Branch();
      branch1.id = 2;
      branch1.name = 'dzial2';
      let branch2 = new Branch();
      branch2.id = 3;
      branch2.name = 'dzial3';
      branches[0] = branch;
      branches[1] = branch1;
      branches[2] = branch2;

      subscriber.next(branches);
    });
  }

}
