import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModel } from '../models/customerDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {
  apiUrl = "https://localhost:44385/api/customers/getcustomerdetails"
  constructor(private httpClient: HttpClient) { }

  getCustomerDetail(): Observable<CustomerDetailResponseModel> {
    return this.httpClient
      .get<CustomerDetailResponseModel>(this.apiUrl)
  }
}
