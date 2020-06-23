import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetBranchesResponse} from "./dto/get-branches-response";
import {map} from "rxjs/operators";
import {GetCategoriesResponse} from "./dto/get-categories-response";

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

}
