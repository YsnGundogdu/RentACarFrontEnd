import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[]=[];
  cars:Car;
  imageUrl = "https://localhost:44385";


  constructor(private carService:CarService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

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
      console.log(this.carImages);
      console.log(response)
    })
  }

  getCarDetailByCarId(carId:number){
    this.carService.getById(carId).subscribe(response=>{
      this.cars = response.data[0];
    })
  }

  getImagePath(image:string){
    return this.imageUrl + image;
  }
}
