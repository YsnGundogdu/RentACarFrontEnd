import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-renting-modal',
  templateUrl: './renting-modal.component.html',
  styleUrls: ['./renting-modal.component.css']
})
export class RentingModalComponent implements OnInit {

  currentDate: any;
  returnDate: any;
  isCarAvailable: boolean;
  messageToDisplay: string;
  carId: number;
  isSaveCardChecked: boolean;
  //cards: Card[];
  hasSavedCard: boolean = false;
  //cardFromDropdown: Card;

  constructor(
              private rentalDetailService: RentalDetailService,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private formBuilder: FormBuilder,
              //private paymentService: PaymentService,
              private toastrService: ToastrService,
              //private cardService: CardService
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
