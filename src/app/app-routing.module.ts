import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarImageDetailComponent } from './components/car-image-detail/car-image-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { SegmentAddComponent } from './components/segment-add/segment-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/segment/:segmentId", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/cardetail/:carId", component: CarDetailComponent },
  { path: "cars/color/:colorId/brand/:brandId", component: CarComponent },
  { path: "cardetails/carImage/:carId", component: CarImageComponent },
  { path: "cars/getcardetails/:carId", component: CarImageDetailComponent },
  { path: "cars/add", component: CarAddComponent },
  { path: "brands/add", component: BrandAddComponent },
  { path: "colors/add", component: ColorAddComponent },
  { path: "segments/add", component: SegmentAddComponent },
  {path: "brands/edit/:brandId", component: BrandEditComponent},
  {path: "cars/edit/:carId", component: CarEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
