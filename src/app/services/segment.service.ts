import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Segment } from '../models/segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  apiUrl = "https://localhost:44385/api/"

  constructor(private httpClient: HttpClient) { }

  getSegments(): Observable<ListResponseModel<Segment>> {
    return this.httpClient
      .get<ListResponseModel<Segment>>(this.apiUrl+"segments/getall");
  }
  add(segment: Segment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"segments/add",segment)
  }
}
