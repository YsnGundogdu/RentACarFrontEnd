import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
  apiUrl = "https://localhost:44385/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }

  getCustomerDetail(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient
    .get<ListResponseModel<RentalDetail>>(this.apiUrl)
  }
}
