import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl = "https://localhost:44385/api/"

  constructor(
    private httpClient: HttpClient
    ) { }

  getRentalDetail(): Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient
      .get<ListResponseModel<RentalDetail>>(newPath)
  }

  checkIfCarIsAvailable(carId: number, rentDate: string, returnDate: string): Observable<any> {
    let newPath = this.apiUrl + "rentals/checkifcarisavailable?carId=${carId}&rentDate=${rentDate}&returnDate=${returnDate}";
    return this.httpClient.get<any>(newPath);
  }

  addRental(rental: RentalDetail) {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}
