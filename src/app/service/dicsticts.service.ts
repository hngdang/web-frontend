import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DistrictsGetAllResponse {
  status: number;
  results: DistrictsResponse[];
}

export interface DistrictsResponse {
  code: string;
  nameWithType: string;
  pathWithType: string;
  lat: string;
  lng: string;
}

@Injectable({
  providedIn: 'root',
})
export class DistrictsService {
  apiUrl: string = 'http://localhost:8080/v1/';
  getByIdEndPoint: string = 'getAllDistricts';

  constructor(private httpClient: HttpClient) {}

  getAllDistricts(): Observable<DistrictsGetAllResponse> {
    const headers = new HttpHeaders().append(
      'content-type',
      'application/json'
    );

    return this.httpClient.get<DistrictsGetAllResponse>(
      this.apiUrl + this.getByIdEndPoint,
      {
        headers: headers,
      }
    );
  }
}
