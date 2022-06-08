import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

import { SingleResponseModel } from '../models/singleResponseModel';


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
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"cars/getcardetailbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycolorandbybrand?colorid="+colorId+ "&brandId=" +brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  /*
  getCarsBySegment(segmentId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbysegmentid?segmentId=" + segmentId
    return this.httpClient
      .get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId
    return this.httpClient
      .get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId
    return this.httpClient
      .get<ListResponseModel<CarDetail>>(newPath)
  }
  */
/*
  getCarDetailsBySegment(segmentId:number): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getallbysegmentid?segmentId=" + segmentId
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  */
}
