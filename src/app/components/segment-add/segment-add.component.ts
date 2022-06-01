import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SegmentService } from 'src/app/services/segment.service';

@Component({
  selector: 'app-segment-add',
  templateUrl: './segment-add.component.html',
  styleUrls: ['./segment-add.component.css']
})
export class SegmentAddComponent implements OnInit {

  segmentAddForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private segmentService: SegmentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createSegmentAddForm()
  }
  createSegmentAddForm() {
    this.segmentAddForm = this.formBuilder.group({
      segmentName: ["", Validators.required],
      //segmentDescription:["",Validators.required],
      dailyPrice:["",Validators.required],
      weeklyPrice:["",Validators.required],
      monthlyPrice:["",Validators.required]
    })
  }

  add() {
    if (this.segmentAddForm.valid) {
      let segmentModel = Object.assign({}, this.segmentAddForm.value)
      this.segmentService.add(segmentModel).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          console.log()
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası")
          }
        }
      })
    } else {
      this.toastrService.error("Formunuz Eksik", "Dikkat")
    }
  }
}
