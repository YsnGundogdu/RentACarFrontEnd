import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = "https://localhost:44385/api/"

  constructor(
    private httpClient: HttpClient
  ) { }
  pay(rental: RentalDetail, amount: number) {
    let path = this.apiUrl + "rentals/paymentadd";
    this.httpClient.post<ResponseModel>(path, { payment: { amount: amount }, rental: rental })
  }
}
