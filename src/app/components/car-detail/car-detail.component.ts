import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = []
  dataLoaded = false;

  constructor(private carDetailService: CarDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe(params => {
      if (params["segmentId"]) {
        this.getCarDetailsBySegment(params["segmentId"])
      }else if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      }else{

      }
      */
      this.getCarDetails()

  }


  getCarDetails() {
    this.carDetailService
      .getCarDetails()
      .subscribe(response => {
        this.carDetails = response.data
        this.dataLoaded = true;
      })
  }
/*
  getCarDetailsBySegment(segmentId: number) {
    this.carDetailService
      .getCarDetailsBySegment(segmentId)
      .subscribe(response => {
        this.carDetails = response.data
        this.dataLoaded = true;
      })
  }

  getCarDetailsByBrand(brandId:number){
    this.carDetailService
    .getCarDeailsByBrand(brandId)
    .subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true
    })
  }
  */
}
