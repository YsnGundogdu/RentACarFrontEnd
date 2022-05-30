import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { Segment } from 'src/app/models/segment';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  carImages:CarImage[];
  brands:Brand[]=[]
  colors:Color[]=[]
  brandFilter:number=0;
  colorFilter:number=0;
  dataLoaded = false;
  currentCar: Car;
  filterText="";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
    ) { }

  imageUrl:string = 'https://localhost:44385/Uploads/Images/';

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();
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

  getSelectedBrand(brandId: number) {
    if (this.brandFilter == brandId) return true;
    else return false;
  }
  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      console.log(this.brands);
    });
  }

  getSelectedColor(colorId: number) {
    if (this.colorFilter == colorId) return true;
    else return false;
  }
  getAllColors() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
      console.log(this.colors);
    });
  }
  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarDetailByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.cars = response.data;
      });
  }
}
