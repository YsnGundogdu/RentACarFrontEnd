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

  //imageUrl = 'https://localhost:44385/';
  constructor(private carDetailService: CarDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe(params => {
      if (params["segmentId"]) {
        this.getCarsBySegmentId(params["segmentId"])
      }else if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else{
        this.getCarDetails()
      }
      */
      this.getCarDetails()

  }


  getCarDetails(){
    this.carDetailService
      .getCarDetails()
      .subscribe(response => {
        this.carDetails = response.data
        this.dataLoaded = true;
      })
  }
  /*
  getCarsBySegmentId(segmentId: number) {
    this.carDetailService
      .getCarsBySegment(segmentId)
      .subscribe(response => {
        this.carDetails = response.data
        this.dataLoaded = true;
      })
  }

  getCarsByBrandId(brandId:number){
    this.carDetailService
    .getCarsByBrand(brandId)
    .subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true
    })
  }
  getCarsByColorId(colorId: number) {
    this.carService
      .getCarsByColor(colorId)
      .subscribe(response => {
        this.cars = response.data
        this.dataLoaded = true
      })
  }
  */
}
