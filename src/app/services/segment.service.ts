import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Segment } from '../models/segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  apiUrl = "https://localhost:44385/api/segments/getall"

  constructor(private httpClient: HttpClient) { }

  getSegments(): Observable<ListResponseModel<Segment>> {
    return this.httpClient
      .get<ListResponseModel<Segment>>(this.apiUrl);
  }
}
