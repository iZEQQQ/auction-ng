import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { DisplayBranchListComponent } from './display-branch-list/display-branch-list.component';
import { BranchListViewComponent } from './branch-list-view/branch-list-view.component';
import {BranchService} from "./branch.service";

@NgModule({
  declarations: [
    AppComponent,
    DisplayBranchComponent,
    DisplayBranchListComponent,
    BranchListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }


