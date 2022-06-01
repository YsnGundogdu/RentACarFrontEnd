import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { SegmentComponent } from './components/segment/segment.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarImageDetailComponent } from './components/car-image-detail/car-image-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import {ToastrModule} from "ngx-toastr";
import { RentingModalComponent } from './components/renting-modal/renting-modal.component'
import { DatePipe } from '@angular/common';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { SegmentAddComponent } from './components/segment-add/segment-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    SegmentComponent,
    BrandComponent,
    CarDetailComponent,
    ColorComponent,
    CustomerDetailComponent,
    RentalDetailComponent,
    CarImageComponent,
    CarImageDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    RentingModalComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    SegmentAddComponent,
    BrandEditComponent,
    CarEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
