import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  brandUpdateForm: FormGroup;

  brand: Brand = {
    brandId: 0,
    brandName: "",
    brandStatus: false
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getById(params['brandId']);
    });
    this.createBrandUpdateFrom();
  }

  createBrandUpdateFrom() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brand.brandId,Validators.required],
      brandName: ["", Validators.required],
      brandStatus: [true, Validators.required]
    });
  }

  getById(brandId: number) {
    this.brandService.getById(brandId).subscribe((response) => {
      this.brand = response.data;
      this.createBrandUpdateFrom();
      this.brandUpdateForm.controls['brandName'].setValue(this.brand.brandName);
    });
  }


  delete() {
    this.brandService.getById(this.brand.brandId).subscribe(response => {
      console.log(response.data)
    })
    this.brandService.delete(this.brand).subscribe(response => {

      this.toastrService.success(response.message);
      this.router.navigate(["brands"]);
    })
  }

  update() {
    let brandModel: Brand = Object.assign({}, this.brandUpdateForm.value);
    if (this.brandUpdateForm.valid) {
      console.log(brandModel)
      this.brandService.update(brandModel).subscribe((response) => {
        this.toastrService.success("Brand is successfully updated.");
      }, (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i]);
          }
        }
      });
    } else {
      console.log(brandModel)
      this.brandService.update(brandModel).subscribe((yanit) => {
        yanit.success
      })
      this.toastrService.error("Complete the form!");
    }
  }

}
