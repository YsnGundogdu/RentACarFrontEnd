import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';
import { CarDetail } from '../models/carDetail';
import { Segment } from '../models/segment';
import { Color } from '../models/color';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  getById(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbyid?id=" + carId
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  getCarDetailByColorAndBrand(colorId: number, brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorandbybrand?colorid=" + colorId + "&brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car: Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  delete(car: any): Observable<ResponseModel> {
    let newPath: string = this.apiUrl + "cars/delete";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  update(car: Car): Observable<ResponseModel> {
    let newPath: string = this.apiUrl + "cars/update";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}
