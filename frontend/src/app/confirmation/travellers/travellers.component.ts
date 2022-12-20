import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/bookingseat/bookingseat.service';
import { passenger } from 'src/app/Models/passenger.model';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.css']
})
export class TravellersComponent implements OnInit {
   // public travellers: Passengers[] = [
   // new Passengers(1,'John',31,5,'Male'),
    //new Passengers(2,'Adam',20,7,'Male'),
   // new Passengers(3,'Kinsey',25,6,'Female')]
   travellers:passenger[]=[];

  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {
    this.travellers = this.bookingservice.totalpassengers;
    console.log(this.bookingservice.totalpassengers)
  }

}
