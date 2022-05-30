import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image-detail',
  templateUrl: './car-image-detail.component.html',
  styleUrls: ['./car-image-detail.component.css']
})
export class CarImageDetailComponent implements OnInit {
  cars:Car[]=[]
  carImages:CarImage[]=[];
  carDetails:CarDetail;
  dataLoaded = false;
  imageUrl:string = "https://localhost:44385/Uploads/Images/";

  constructor(
    private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    //this.getCarImage(this.cars.carId);
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
       this.getCarDetailByCarId(params["carId"]),
       this.getCarImage(params["carId"])
      }
    })
  }

  getCarImage(carId:number){
    this.carImageService.getCarImage(carId).subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = true;
      console.log(this.carImages);
      console.log(response)
    })
  }
/*
  getById(carId:number){
    this.carDetailService.getById(carId).subscribe(response=>{
      this.car = response.data[0];
      this.dataLoaded = true;
    })
  }
  */
  getCarDetailByCarId(carId:number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails = response.data[0];
    })
  }

  getImagePath(image:string){
    return this.imageUrl + image;
  }
}
