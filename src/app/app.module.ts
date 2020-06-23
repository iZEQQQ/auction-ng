import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { DisplayBranchListComponent } from './display-branch-list/display-branch-list.component';
import { BranchListViewComponent } from './branch-list-view/branch-list-view.component';
import {BranchService} from "./branch.service";
import {HttpClientModule} from "@angular/common/http";
import { BranchEditViewComponent } from './branch-edit-view/branch-edit-view.component';
import {FormsModule} from "@angular/forms";
import { CategoryListViewComponent } from './category-list-view/category-list-view.component';
import { DisplayCategoryListComponent } from './display-category-list/display-category-list.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayBranchComponent,
    DisplayBranchListComponent,
    BranchListViewComponent,
    BranchEditViewComponent,
    CategoryListViewComponent,
    DisplayCategoryListComponent,
    DisplayCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }


