import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BranchListViewComponent} from "./branch-list-view/branch-list-view.component";
import {BranchEditViewComponent} from "./branch-edit-view/branch-edit-view.component";


const routes: Routes = [
  {
    path: 'branches',
    component: BranchListViewComponent
  },
  {
    path: 'branches/:id/edit',
    component: BranchEditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
