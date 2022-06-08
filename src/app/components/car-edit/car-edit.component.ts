import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { PlainCar } from 'src/app/models/plainCar';
import { Segment } from 'src/app/models/segment';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { SegmentService } from 'src/app/services/segment.service';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  carUpdateForm : FormGroup

  brands: Brand[]
  colors: Color[]
  segments: Segment[]

  car: PlainCar = {
    carId : 0,
    brandId: 0,
    segmentId: 0,
    colorId: 0,
    carDescription:"",
    carModelYear:0,
    carStatus:false

  }


  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private colorService: ColorService,
    private carService: CarService,
    private segmentService: SegmentService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
     this.getCarById(params["carId"]);
    })
    this.getBrands();
    this.getColors();
    this.getSegments();
    this.createCarUpdateForm();
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      carId:[this.car.carId,Validators.required],
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      segmentId:["",Validators.required],
      carModelYear:["",Validators.required],
      carDescription:["",Validators.required],
      carStatus:[true,Validators.required]
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data
    })
  }
  getColors(){
    this.colorService.getColor().subscribe((response)=>{
      this.colors = response.data
    })
  }
  getSegments(){
    this.segmentService.getSegments().subscribe((response)=>{
      this.segments = response.data
    })
  }

  getCarById(carId: number) {
    this.carService.getById(carId).subscribe((response) => {
      this.car = response.data;
      this.createCarUpdateForm()
      this.carUpdateForm.controls['brandId'].setValue(this.car.brandId);
      this.carUpdateForm.controls['colorId'].setValue(this.car.colorId);
      this.carUpdateForm.controls['segmentId'].setValue(this.car.segmentId);
      this.carUpdateForm.controls['carModelYear'].setValue(this.car.carModelYear);
      this.carUpdateForm.controls['carDescription'].setValue(this.car.carDescription);
    });
  }

  deleteCar() {
    this.carService.delete(this.car).subscribe(response => {
      this.toastrService.success(response.message);
      this.router.navigate(["cars/color/2"]);
    }, (responseError) => {
      if (responseError.error.Errors) {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i]);
          }
        }
      } else {
        this.toastrService.error(responseError.error.Message);
      }
    })
  }

  update() {
    let carModel: Car = Object.assign({}, this.carUpdateForm.value);
    if (this.carUpdateForm.valid) {
      console.log(carModel)
      this.carService.update(carModel).subscribe((response) => {
          this.toastrService.success("Car is updated successfully.");
        },
        (responseError) => {
          if (responseError.error.Errors) {
            if (responseError.error.Errors.length > 0) {
              for (let i = 0; i < responseError.error.Errors.length; i++) {
                this.toastrService.error(responseError.error.Errors[i]);
              }
            }
          } else {
            this.toastrService.error(responseError.error.Message);
          }
        });
    } else {
      this.carService.update(carModel).subscribe((yanit) => {
        yanit.success
      })
      this.toastrService.error("Complete the form!");
    }
  }

}
