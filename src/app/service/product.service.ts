import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';

export interface PropertyResponse {
  status: number;
  results: PropertyResults;
}

export interface PropertyGetResponse {
  status: number;
  results: Property[];
}

export interface PropertyResults {
  resultsTotalCount: number;
  properties: Property[];
}

export interface Property {
  propertyId: string;
  typeId: string;
  typeName: string;
  createUserId: string;
  createUserName: string;
  createDatetime: string;
  lastupUserId: string;
  lastupUserName: string;
  lastupDatetime: string;
  title: string;
  address: string;
  lat: string;
  lng: string;
  amount: string;
  area: string;
  description: string;
  approveStatus: string;
  propertyImg: string[];
}

export interface SearchRequest {
  userId: string | null;
  userName: string | null;
  typeId: string | null;
  title: string | null;
  address: string | null;
  createDatetimeFrom: string | null;
  createDatetimeTo: string | null;
  amountFrom: string | null;
  amountTo: string | null;
  areaFrom: string | null;
  areaTo: string | null;
  offset: number | null;
  limit: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'http://localhost:8080/v1/';
  searchEndPoint: string = 'searchProperty';
  getByIdEndPoint: string = 'getProperty';

  constructor(private httpClient: HttpClient) {}

  getAll(searchRequest: SearchRequest): Observable<PropertyResponse> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(searchRequest);
    return this.httpClient.post<PropertyResponse>(
      this.apiUrl + this.searchEndPoint,
      body,
      { headers: headers }
    );
  }

  getDetails(id: number): Observable<PropertyGetResponse> {
    const headers = new HttpHeaders().append(
      'content-type',
      'application/json'
    );

    const queryParams = new HttpParams().append('propertyId', id);

    return this.httpClient.get<PropertyGetResponse>(
      this.apiUrl + this.getByIdEndPoint,
      {
        params: queryParams,
        headers: headers,
      }
    );
  }
}
