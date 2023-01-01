import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../services/booking.service';
import { Ticket } from '../confirmation/payment/booking_confirmation.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedBackComponent implements OnInit {

  display = false

  ticket: Ticket = new Ticket(0, 0, 0, "", "", 0, 0, []);

  constructor(private http:HttpClient, private ticketService:Booking, private router:Router) { }

  onPost():void {
    this.display = true;
    this.ticket.feedback = "Great!";
    console.log(this.ticketService.id);
    this.http.get<Ticket>('http://localhost:8080/api/ticket/'+this.ticketService.id).subscribe(data => {
    console.log(data)  
    this.ticket = data;
      this.ticket.feedback = "Great!";
      this.http.put('http://localhost:8080/api/tickets/'+this.ticketService.id, this.ticket, {responseType:'text' as 'json'}).subscribe(data => {
        console.log(data)
      })
    })
   this.router.navigate(['/home']) 
  }

  ngOnInit(): void {
  

  }

}
