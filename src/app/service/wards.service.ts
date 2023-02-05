import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WardsGetResponse {
  status: number;
  results: WardsResponse[];
}

export interface WardsResponse {
  code: string;
  parentCode: string;
  nameWithType: string;
  pathWithType: string;
  lat: string;
  lng: string;
}

@Injectable({
  providedIn: 'root',
})
export class WardsService {
  apiUrl: string = 'http://localhost:8080/v1/';
  getByIdEndPoint: string = 'getWards';

  constructor(private httpClient: HttpClient) {}

  getWards(districtCode: string): Observable<WardsGetResponse> {
    const headers = new HttpHeaders().append(
      'content-type',
      'application/json'
    );

    const queryParams = new HttpParams().append('districtCode', districtCode);

    return this.httpClient.get<WardsGetResponse>(
      this.apiUrl + this.getByIdEndPoint,
      {
        params: queryParams,
        headers: headers,
      }
    );
  }
}
