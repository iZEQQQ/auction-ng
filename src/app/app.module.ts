import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { DisplayBranchListComponent } from './display-branch-list/display-branch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBranchComponent,
    DisplayBranchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


