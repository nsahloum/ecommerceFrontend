import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private httpClient: HttpClient) { }

  getCurrentPages(pageNo?: number): Observable<number> {
    if(!pageNo){
      pageNo = 0;
    }
  let queryParams = new HttpParams().append("page",pageNo);
    return this.httpClient.get<GetResponse>(this.baseUrl, {params: queryParams}).pipe(
      map(response => response.page.number)
    );
  }

  getProductList(pageNo?: number): Observable<Product[]> {
    if(!pageNo){
      pageNo = 0;
    }
    let queryParams = new HttpParams().append("page",pageNo);
    return this.httpClient.get<GetResponse>(this.baseUrl, {params: queryParams}).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
