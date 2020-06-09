import {Component} from '@angular/core';
import {Branch} from "./model/branch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auction-ng';

  branches: Branch[] = [];

  constructor() {
    let branch = new Branch();
    branch.id = 1;
    branch.name = 'dzial';
    let branch1 = new Branch();
    branch1.id = 2;
    branch1.name = 'dzial2';
    let branch2 = new Branch();
    branch2.id = 3;
    branch2.name = 'dzial3';
    this.branches[0] = branch;
    this.branches[1] = branch1;
    this.branches[2] = branch2;

  }


}
