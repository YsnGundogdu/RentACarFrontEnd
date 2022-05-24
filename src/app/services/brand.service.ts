import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44385/api/"
  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient
      .get<ListResponseModel<Brand>>(newPath);
  }

}
