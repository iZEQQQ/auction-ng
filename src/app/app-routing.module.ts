import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BranchListViewComponent} from "./branch-list-view/branch-list-view.component";
import {BranchEditViewComponent} from "./branch-edit-view/branch-edit-view.component";
import {CategoryListViewComponent} from "./category-list-view/category-list-view.component";
import {CategoryEditViewComponent} from "./category-edit-view/category-edit-view.component";


const routes: Routes = [
  {
    path: 'branches',
    component: BranchListViewComponent
  },
  {
    path: 'branches/:id/edit',
    component: BranchEditViewComponent
  },
  {
    path: 'branches/:id/categories',
    component: CategoryListViewComponent
  },
  {
    path: 'branches/:branchId/categories/:categoryId/edit',
    component: CategoryEditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
