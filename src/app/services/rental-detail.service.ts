import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
  apiUrl = "https://localhost:44385/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }

  getCustomerDetail(): Observable<RentalDetailResponseModel> {
    return this.httpClient
    .get<RentalDetailResponseModel>(this.apiUrl)
  }
}
