import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  rentalDetails: RentalDetail[] = []

  customerDetails: CustomerDetail[];
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  @Input() car: Car;
  dataLoaded = false;

  minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;


  constructor(
    private rentalDetailService: RentalDetailService,
    private router: Router,
    private toastrService: ToastrService,
    private datePipe: DatePipe,
    //private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }
  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }

  createRental() {
    let MyRental: RentalDetail;
    if (localStorage.getItem('token') && this.rentDate != undefined) {
      //@ts-ignore
      MyRental = {
        carId: this.car.carId,
        brandName: this.car.brandName,
        colorName: this.car.colorName,
        carModelYear: this.car.carModelYear,
        dailyPrice: this.car.dailyPrice,
        carDescription: this.car.carDescription,
        rentDate: this.rentDate,
        returnDate: this.returnDate,
        //customerId: this.localStorageService.getCurrentCustomer().customerId
      };
      this.toastrService.info(
        'Ödeme sayfasına yönlendiriliyorsunuz.',
        'Ödeme İşlemleri'
      );
      this.router.navigate(['/payment/', JSON.stringify(MyRental)]);
    } else if (!localStorage.getItem('token')) {
      this.toastrService.info('Giriş Yapın', 'Araba Kiralayabilmek için');
    } else {
      this.toastrService.error('Dikkat', 'Tarih Seçtiğinizden Emin Olun');
    }
  }

  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }

  setCustomerId(customerId: string) {
    this.customerId = +customerId;
  }


  getRentalDetails() {
    this.rentalDetailService
      .getRentalDetail()
      .subscribe(response => {
        this.rentalDetails = response.data
      })
  }
}
