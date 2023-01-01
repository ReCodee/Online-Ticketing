import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookings } from './bookings';
import { LoginService } from '../services/login.service';
import { Passengers } from '../confirmation/travellers/travellers.model';
import { passenger } from '../Models/passenger.model';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  

  /*booking = [

    { booking_ID:19190 , name: 'Aakash',location_from: 'mumbai',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Ankush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1550 , name: 'Ankush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Ankush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Ankush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush',location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" }

    
 ]*/
 printss=false
 bookings : bookings[] =[];
 passengers : passenger[] = [];
 userId : number;


 
 constructor(
   private httpClient : HttpClient,
   private loginService : LoginService
   ) {

  }
 
 ngOnInit(): void {
   this.userId = this.loginService.userid;
   this.printtable();
 }

 Delete(id:number):void{
    this.httpClient.delete<Map<String, Boolean>>('http://localhost:8080/api/tickets/'+id).subscribe(data => {
      console.log(data);
    })
    this.passengers = []
    this.printtable();
 }

 printtable(){
   //call
   this.httpClient.get<bookings[]>('http://localhost:8080/api/tickets/'+this.userId).subscribe(data => {
    this.bookings=data;

    for ( let i = 0 ; i < this.bookings.length ; i++ ) {
      for ( let j = 0 ; j < this.bookings[i].passengers.length ; j++ ) {
         this.bookings[i].passengers[j].source = this.bookings[i].source;
         this.bookings[i].passengers[j].destination = this.bookings[i].destination;
         this.bookings[i].passengers[j].ticketID = this.bookings[i].id;
         this.passengers.push(this.bookings[i].passengers[j]);
      }
    }
    
    console.log("hello");
    console.log(this.userId);
    console.log(data);

   })
  

    
  
    this.printss=true
 }

}
