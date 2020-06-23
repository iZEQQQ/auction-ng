import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetBranchesResponse} from "./dto/get-branches-response";
import {map} from "rxjs/operators";
import {GetCategoriesResponse} from "./dto/get-categories-response";
import {Branch} from "./model/branch";
import {GetBranchResponse} from "./dto/get-branch-response";
import {Category} from "./model/category";
import {GetCategoryResponse} from "./dto/get-category-response";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findCategories(id: number): Observable<number[]> {
    return this.http.get<GetCategoriesResponse>('http://localhost:8080/api/branches/'+id+'/categories')
      .pipe(map(value => {
        return value.ids;
      }));
  }

  getCategory(idBranch: number,idCategory:number): Observable<Category> {
    return this.http.get<GetCategoryResponse>('http://localhost:8080/api/branches/' + idBranch+'/categories/'+idCategory)
      .pipe(map(value => {
        let category: Category = new Category();
        category.name = value.name;
        category.id = value.id;
        return category;
      }));
  }

}
