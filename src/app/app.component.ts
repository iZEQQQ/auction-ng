import {Component} from '@angular/core';
import {Branch} from "./model/branch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auction-ng';

  branch: Branch;

  constructor() {
    this.branch = new Branch();
    this.branch.id = 2;
    this.branch.name = 'toys';
  }


}
