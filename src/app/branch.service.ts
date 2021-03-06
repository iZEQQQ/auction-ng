import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GetBranchesResponse} from "./dto/branch/get-branches-response";
import {map} from "rxjs/operators";
import {Branch} from "./model/branch";
import {GetBranchResponse} from "./dto/branch/get-branch-response";
import {PutBranchRequest} from "./dto/branch/put-branch-request";
import {PostBranchRequest} from "./dto/branch/post-branch-request";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getBranches(): Observable<number[]> {
    return this.http.get<GetBranchesResponse>('http://localhost:8080/api/branches',{withCredentials: true})
      .pipe(map(value => {
        return value.ids;
      }));
  }

  getBranch(id: number): Observable<Branch> {
    return this.http.get<GetBranchResponse>('http://localhost:8080/api/branches/' + id,{withCredentials: true})
      .pipe(map(value => {
        let branch: Branch = new Branch();
        branch.name = value.name;
        branch.id = value.id;
        return branch;
      }));
  }


  //TODO podpiac to do branch edit view i id tutaj wygenerowac
  postBranch(branch: Branch): void {
    let req = new PostBranchRequest();
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    req.name = branch.name;
    this.http.post('http://localhost:8080/api/branches/',req).subscribe(
      value => console.log(value),
      error => console.log(error));

  }

  putBranch(branch: Branch) {
    let req = new PutBranchRequest();
    let headers = new HttpHeaders()

    headers.set('Content-Type', 'application/json');
    req.name = branch.name;
    this.http.put<any>('http://localhost:8080/api/branches/' + branch.id, req)
      .subscribe(
        value => console.log(value),
        error => console.log(error)
        // TODO obslozyc jak nie przejdzie
      );
  }


}
