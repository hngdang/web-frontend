import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface UserGetResponse {
  status: number;
  results: User[];
}

export interface User {
  userId: string;
  userName: string;
  approveStatus: string;
  stdId: string | null;
  address: string | null;
  idCard: string | null;
  fCard: string | null;
  bCard: string | null;
  portrait: string | null;
  phone: string;
  email: string;
  password: string;
  roleId: string;
  roleName: string;
  createUserId: string;
  createUserName: string;
  createDatetime: string;
  lastupUserId: string | null;
  lastupUserName: string | null;
  lastupDatetime: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:8080/v1/';
  getByIdEndPoint: string = 'getUser';

  constructor(private httpClient: HttpClient) {}

  getDetails(id: number): Observable<UserGetResponse> {
    const headers = new HttpHeaders().append(
      'content-type',
      'application/json'
    );

    const queryParams = new HttpParams().append('userId', id);

    return this.httpClient.get<UserGetResponse>(
      this.apiUrl + this.getByIdEndPoint,
      {
        params: queryParams,
        headers: headers,
      }
    );
  }
}
