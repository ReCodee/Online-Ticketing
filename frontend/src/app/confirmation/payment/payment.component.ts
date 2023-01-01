import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Passengers } from "../travellers/travellers.model";
import { Router , ActivatedRoute } from '@angular/router';


import { Ticket } from './booking_confirmation.model';
import { BookingService } from 'src/app/services/bookingseat.service';
import { passenger } from 'src/app/Models/passenger.model';
import { SearchService } from 'src/app/services/search.service';
import { LoginService } from 'src/app/services/login.service';
import { scheduled } from 'rxjs';
import { CouponService } from 'src/app/services/coupon.service';
import { NONE_TYPE } from '@angular/compiler';
import { Booking } from '../../services/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  passenger_list : Passengers[] = [];
  travellers:passenger[]=[];
  
  id:Number
  bookingConfirmation: Ticket;
  response = true;
  fare=300;
  totalFare:number;
  PickUpPoint:String;
  DropOffPoint:String;
  Date:String;
  NumberofPassengers:number;
  busID: number;
  scheduledJourneyId :number = 0;
  couponCode = "NONE";


  constructor(private ticketService:Booking, private router: Router , private http:HttpClient,private bookingservice:BookingService, 
    private searchservice:SearchService , private loginservice :LoginService, private couponService:CouponService) { }

  ngOnInit(): void {
    console.log(this.id)
    this.travellers = this.bookingservice.totalpassengers;
    this.totalFare=this.bookingservice.amount;
    this.PickUpPoint=this.bookingservice.boarding_point;
    this.DropOffPoint=this.bookingservice.dropping_point;
    this.NumberofPassengers = this.bookingservice.totalpassengers.length;
    this.Date=this.searchservice.date;
    this.couponCode = this.couponService.code;
    console.log(this.searchservice.locationfrom)

      for (let i = 0; i < this.NumberofPassengers; i++) {
        let temp: Passengers = new Passengers(0, this.travellers[i].name, this.travellers[i].age, Number(this.travellers[i].seatId), this.travellers[i].gender);
        this.passenger_list.push(temp);
      }
      this.bookingConfirmation = new Ticket
      (0, this.totalFare + 20 * this.NumberofPassengers, this.searchservice.vehicleId, this.searchservice.locationfrom, this.searchservice.locationto, this.loginservice.userid, this.searchservice.busId, this.passenger_list);
    }

  onBook(bookingConfirmation : Ticket) {
    console.log(bookingConfirmation);
    if ( this.couponCode != undefined ) {
      bookingConfirmation.coupon = this.couponCode;
      bookingConfirmation.price = bookingConfirmation.price - (bookingConfirmation.price / 10);
    }
    this.http.post('http://localhost:8080/api/tickets',bookingConfirmation,{responseType:'text' as 'json'})
    .subscribe(responseData =>{
      console.log(responseData);
      let obj = JSON.parse(String(responseData));
      console.log(obj.id)
      this.ticketService.id = obj.id
      console.log(this.ticketService.id)
    });
    
  }
  

  Coupons():void {
    this.router.navigate(['/coupon'])
  }


  onHome():void{
    this.router.navigate(['/home'])
  }

  onFeedback():void {
    this.router.navigate(['/feedback'])
  }

  onBookingSeat():void{
    this.travellers.splice(0, this.travellers.length)
    this.router.navigate(['/bookingseat'],{ skipLocationChange: true })
  }

  BookingIsDone():boolean{
    return this.response;
  }

}
