import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';
import { CarDetail } from '../models/carDetail';
import { Segment } from '../models/segment';
import { Color } from '../models/color';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44385/api/"
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath);
  }

  getCarsBySegment(segmentId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbysegmentid?segmentId=" + segmentId
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath)
  }

  getCarDetails(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl +"cars/getbyid?id=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycolorandbybrand?colorid="+colorId+ "&brandId=" +brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
