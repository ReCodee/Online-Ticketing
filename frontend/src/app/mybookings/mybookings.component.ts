import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookings } from './bookings';
import { LoginService } from '../login.service';
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
 printtable(){
   //call
   this.httpClient.get<bookings[]>('http://localhost:8082/myBookings').subscribe(data => {
    this.bookings=data;

    
    console.log("hello");
    console.log(this.userId);
    console.log(data);

   })
  

    
  
    this.printss=true
 }

}
