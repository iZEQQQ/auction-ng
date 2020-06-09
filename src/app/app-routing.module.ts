import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BranchListViewComponent} from "./branch-list-view/branch-list-view.component";


const routes: Routes = [
  {
    path: 'branches',
    component: BranchListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
