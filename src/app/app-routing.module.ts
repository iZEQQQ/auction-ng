import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BranchListViewComponent} from "./branch-list-view/branch-list-view.component";
import {BranchEditViewComponent} from "./branch-edit-view/branch-edit-view.component";
import {CategoryListViewComponent} from "./category-list-view/category-list-view.component";
import {CategoryEditViewComponent} from "./category-edit-view/category-edit-view.component";
import {AuctionListViewComponent} from "./auction-list-view/auction-list-view.component";
import {AuctionEditViewComponent} from "./auction-edit-view/auction-edit-view.component";
import {AuctionViewComponent} from "./auction-view/auction-view.component";


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
  },
  {
    path: 'branches/:branchId/categories/:categoryId/auctions',
    component: AuctionListViewComponent
  },
  {
    path: 'branches/:branchId/categories/:categoryId/auctions/:auctionId/edit',
    component: AuctionEditViewComponent
  },
  {
    path: 'branches/:branchId/categories/:categoryId/auctions/:auctionId',
    component: AuctionViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
