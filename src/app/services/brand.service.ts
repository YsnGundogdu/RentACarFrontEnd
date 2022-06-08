import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


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

  getById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getbyid?id=" + brandId
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "brands/add", brand)
  }

  delete(brand: Brand): Observable<ResponseModel> {
    let newPath: string = this.apiUrl + "brands/delete";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  update(brand: Brand): Observable<ResponseModel> {
    let newPath: string = this.apiUrl + "brands/update";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
}
