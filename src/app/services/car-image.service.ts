import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl= "https://localhost:44385/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImage(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl +"cars/getbyid?id=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
