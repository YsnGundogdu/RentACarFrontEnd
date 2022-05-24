import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { Segment } from 'src/app/models/segment';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded = false;
  currentCar: Car;
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  imageUrl = 'https://localhost:44385/';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["segmentId"]) {
        this.getCarsBySegmentId(params["segmentId"])
      }else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else
        this.getCars()

    })
  }

  getCars() {
    this.carService
      .getCars().subscribe(response => {
        this.cars = response.data
        this.dataLoaded = true
      })

  }
  getCarsBySegmentId(segmentId: number) {
    this.carService
      .getCarsBySegment(segmentId)
      .subscribe(response => {
        this.cars = response.data
        this.dataLoaded = true
      })
  }
  getCarsByBrandId(brandId: number) {
    this.carService
      .getCarsByBrand(brandId)
      .subscribe(response => {
        this.cars = response.data
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

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}
