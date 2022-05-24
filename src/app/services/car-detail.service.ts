import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44385/api/"

  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
/*
  getCarDetailsBySegment(segmentId:number): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getallbysegmentid?segmentId=" + segmentId
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDeailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  */
}
