import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Passengers } from "../travellers/travellers.model";
import { Router , ActivatedRoute } from '@angular/router';


import { booking_confirmation } from './booking_confirmation.model';
import { BookingService } from 'src/app/bookingseat/bookingseat.service';
import { passenger } from 'src/app/Models/passenger.model';
import { SearchService } from 'src/app/search.service';
import { LoginService } from 'src/app/login.service';
import { scheduled } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  passenger_list : Passengers[] = [];
  travellers:passenger[]=[];

  bookingConfirmation: booking_confirmation;

  response = '';
  fare=300;
  totalFare:number;
  PickUpPoint:String;
  DropOffPoint:String;
  Date:String;
  NumberofPassengers:number;
  busID: number;
  scheduledJourneyId :number = 0;


  constructor(private router: Router , private http:HttpClient,private bookingservice:BookingService, 
    private searchservice:SearchService , private loginservice :LoginService) { }

  ngOnInit(): void {

    
    

    this.travellers = this.bookingservice.totalpassengers;
    this.totalFare=this.bookingservice.amount;
    this.PickUpPoint=this.bookingservice.boarding_point;
    this.DropOffPoint=this.bookingservice.dropping_point;
    this.NumberofPassengers = this.bookingservice.totalpassengers.length;
    this.Date=this.searchservice.date;

    this.http.get<number>('http://localhost:8082/getsjID/'+this.PickUpPoint+'/'+this.DropOffPoint+'/'+this.searchservice.busId+'/'+this.Date).subscribe(res =>{
      this.scheduledJourneyId = res;
      console.log(this.scheduledJourneyId); 
      console.log(typeof(res));
      for (let i = 0; i < this.NumberofPassengers; i++) {
        let temp: Passengers = new Passengers(0,this.travellers[i].name,this.travellers[i].age,Number(this.travellers[i].seatId),this.travellers[i].gender);
        this.passenger_list.push(temp);
      }
      this.bookingConfirmation = new booking_confirmation
      (0,this.loginservice.userid,this.searchservice.busId,this.scheduledJourneyId,this.passenger_list);
    })

    
    
}

  onBook(bookingConfirmation : booking_confirmation) {
    console.log(bookingConfirmation);
    this.http.post('http://localhost:8082/confirmation',bookingConfirmation,{responseType:'text' as 'json'})
    .subscribe(responseData =>{
      this.response = String(responseData);
      console.log(responseData);
    });
  }


  onHome():void{
    this.router.navigate(['/home'])
  }
  onBookingSeat():void{
    this.travellers.splice(0, this.travellers.length)
    this.router.navigate(['/bookingseat'],{ skipLocationChange: true })
  }

  BookingIsDone():boolean{
    if(this.response=='Booking is done'){
      return true;
    }
    return false;
  }

}
