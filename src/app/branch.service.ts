import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GetBranchesResponse} from "./dto/get-branches-response";
import {map} from "rxjs/operators";
import {Branch} from "./model/branch";
import {GetBranchResponse} from "./dto/get-branch-response";
import {PutBranchRequest} from "./dto/put-branch-request";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findBranches(): Observable<number[]> {
    return this.http.get<GetBranchesResponse>('http://localhost:8080/api/branches')
      .pipe(map(value => {
        return value.ids;
      }));
  }

  getBranch(id: number): Observable<Branch> {
    return this.http.get<GetBranchResponse>('http://localhost:8080/api/branches/' + id)
      .pipe(map(value => {
        let branch: Branch = new Branch();
        branch.name = value.name;
        branch.id = value.id;
        return branch;
      }));
  }

  putBranch(branch: Branch) {
    let req = new PutBranchRequest();
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    req.name = branch.name;
    this.http.put<any>('http://localhost:8080/api/branches/' + branch.id, req, {headers});
  }

}
