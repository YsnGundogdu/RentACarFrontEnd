export interface RentalDetail{
  rentalId:number;
  userFullName:string;
  carDescription:string;
  carModelYear:number;
  brandName:string;
  colorName:string;
  dailyPrice:number;
  rentLocationDescription:string;
  returnLocationDescription:string;
  carId:number;
  rentDate:Date;
  returnDate?:Date;
  customerId:number;
}
