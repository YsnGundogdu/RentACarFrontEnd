import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-renting-modal',
  templateUrl: './renting-modal.component.html',
  styleUrls: ['./renting-modal.component.css']
})
export class RentingModalComponent implements OnInit {

  currentDate: any;
  rentDate: Date;
  returnDate: any;
  isCarAvailable: boolean;
  messageToDisplay: string;
  carId: number;
  isSaveCardChecked: boolean;
  hasSavedCard: boolean = false;

  paymentForm: FormGroup;
  months: string[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  years: string[] = ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033"];

  constructor(
    private rentalDetailService: RentalDetailService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.activatedRoute.params.subscribe((params) => {
      this.carId = params["carId"];
    })

  }

  checkIfCarIsAvailable(carId: number, rentDate: string, returnDate: string) {
    this.rentalDetailService.checkIfCarIsAvailable(carId, rentDate, returnDate).subscribe((response) => {
      this.isCarAvailable = response.success;
      this.messageToDisplay = response.message;
      if (response.success) {
        this.toastrService.success(response.message);
      } else {
        this.toastrService.error(response.message);
      }
    })
  }


}





