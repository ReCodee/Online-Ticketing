
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { passenger } from '../Models/passenger.model';
import { Seat } from '../Models/seat.model';
import { SearchService } from '../search.service';
import { BookingService } from './bookingseat.service';

@Component({
  selector: 'app-bookingseat',
  templateUrl: './bookingseat.component.html',
  styleUrls: ['./bookingseat.component.css']
})
export class BookingseatComponent implements OnInit {

  constructor(private bookingservice:BookingService,private router:Router,private http: HttpClient,
     private searchservice:SearchService ) { }

  totalpassenger:passenger[]=[];
  SelectedSeat=[];
  
  total=0;

  Boarding:String[]=["Andheri","Vashi","Dadar","CSTM"];
  Dropping:String[]=["lucknow","prayagraj","Sultanpur","Varanasi"];

  Dropping_Point:String="";
  Boarding_Point:String="";
  
  // variable from Kartik;
  BusId:number=this.searchservice.busId;
  date:String=this.searchservice.date;
  locationNameTo:string=this.searchservice.locationto;
  locationNameFrom:string=this.searchservice.locationfrom;
  
  // 1 for unavaiable
  //0 for vacant
  // seatingDetail:Seat[]=[new Seat(0,0,1),new Seat(1,1,1),new Seat(2,2,0),new Seat(3,3,0),new Seat(4,4,0),new Seat(5,5,1),new Seat(6,6,0),new Seat(7,7,0),new Seat(8,8,0),
  //   new Seat(9,9,0),new Seat(10,10,0),
  //   new Seat(11,11,0),new Seat(12,12,1),new Seat(13,13,0),new Seat(14,14,0),new Seat(15,15,0),new Seat(16,16,0),new Seat(17,17,0),new Seat(18,18,0),
  //   new Seat(19,19,0),new Seat(20,20,0),
  //   new Seat(21,21,1),new Seat(22,22,1),new Seat(23,23,0),new Seat(24,24,0),new Seat(25,25,0),new Seat(26,26,0),new Seat(27,27,0),new Seat(28,28,0),
  //   new Seat(29,29,0)
  // ];
  
  seatingDetail:Seat[]=[];




  ngOnInit(): void {
    this.bookingservice.totalpassengers=[];
    this.totalpassenger=this.bookingservice.totalpassengers;
    this.fetchSeating(this.BusId,this.date);
    this.fetchboarding(this.locationNameTo);
    this.fetchDropping(this.locationNameFrom);
    console.log("console here");
    console.log(this.date);
    console.log(this.searchservice.date);
  }

  Seat(e)
  {
   
 //   var s=Number(e);
  //  let id=document.getElementById(e);
    if(this.seatingDetail[e].status==0)
    {
      if(this.SelectedSeat.length==3)
      {
        alert("you can only select maxmimum 3 seats");
        return;
      }
       this.SelectedSeat.push(e);
      // this.status[e]=2;
       this.total=this.total+300;

       this.seatingDetail[e].status=2;
    }
    else if( this.seatingDetail[e].status==2)
    {
      this.SelectedSeat.forEach((value,index)=>{
        if(value==e) this.SelectedSeat.splice(index,1);
       
    });
     // this.status[e]=0;
      this.total=this.total-300;

      this.seatingDetail[e].status=0;
    }
    
  //  console.log(typeof(e)," "," " ,e);
   // console.log(this.SelectedSeat);
    

  }

  onSubmit(f:NgForm){
    // console.log(f.value);

     
  //    console.log(this.seatingDetail);

      
   /*  this.totalpassenger.push(f.value.passenger0);
      this.totalpassenger.push(f.value.passenger1);
      this.totalpassenger[0].seat=this.SelectedSeat[0].toString();
      this.totalpassenger[1].seat=this.SelectedSeat[1].toString();

      console.log(this.totalpassenger);
      console.log(this.totalpassenger.length);
      */
      if(this.SelectedSeat.length==1)
      {
        this.totalpassenger.push(f.value.passenger0); 
        this.totalpassenger[0].seatnumber=(this.SelectedSeat[0]+1).toString();
        var temp=this.SelectedSeat[0];
        this.totalpassenger[0].seatId=this.seatingDetail[temp].seatId.toString();
      }
      else if(this.SelectedSeat.length==2)
      {
        this.totalpassenger.push(f.value.passenger0);
        this.totalpassenger.push(f.value.passenger1);
        this.totalpassenger[0].seatnumber=(this.SelectedSeat[0]+1).toString();
        var temp=this.SelectedSeat[0];
        this.totalpassenger[0].seatId=this.seatingDetail[temp].seatId.toString();
        temp=this.SelectedSeat[1];
        this.totalpassenger[1].seatnumber=(this.SelectedSeat[1]+1).toString();    
        this.totalpassenger[1].seatId=this.seatingDetail[temp].seatId.toString();
      }
      else 
      {
        this.totalpassenger.push(f.value.passenger0);
        this.totalpassenger.push(f.value.passenger1);
        this.totalpassenger.push(f.value.passenger2);
        
        this.totalpassenger[0].seatnumber=(this.SelectedSeat[0]+1).toString();
        var temp=this.SelectedSeat[0];
        this.totalpassenger[0].seatId=this.seatingDetail[temp].seatId.toString();
        temp=this.SelectedSeat[1];
        this.totalpassenger[1].seatnumber=(this.SelectedSeat[1]+1).toString();    
        this.totalpassenger[1].seatId=this.seatingDetail[temp].seatId.toString();
        temp=this.SelectedSeat[2];

        this.totalpassenger[2].seatnumber=(this.SelectedSeat[2]+1).toString();
        this.totalpassenger[2].seatId=this.seatingDetail[temp].seatId.toString();
     
      }
       

    //  console.log(this.totalpassenger);
     // console.log(this.bookingservice.totalpassengers);
   
  /*    console.log(this.totalpassenger.length);
      console.log(this.Dropping_Point);
      console.log(this.Boarding_Point);
      console.log(this.total);  */
      this.bookingservice.amount=this.total;
 //     console.log(this.bookingservice.amount);
     this.bookingservice.dropping_point= this.Dropping_Point
   this.bookingservice.boarding_point=  this.Boarding_Point;

  // console.log(this.bookingservice.boarding_point);
  // console.log(this.bookingservice.dropping_point);
    this.toConfirm();
      
  }

  toConfirm():void{
    this.router.navigate(['/confirmation'], { skipLocationChange: true });
  }

  fetchSeating(BusID:number,date:String)
  {
       this.http.get<Seat[]>('http://localhost:8082/seatstatus'+'/'+BusID + '/'+date).subscribe(res =>{
        this.seatingDetail=res;
// console.log(this.seatingDetail);
// console.log(res);
// console.log(BusID,date);
       })
  }


  fetchboarding(LocationName:string){
     this.http.get<String[]>('http://localhost:8082/locationsubsetlistbyname' + '/' + LocationName).subscribe(res =>{
      this.Boarding=res;
      // console.log(this.Boarding);

     })

  }

  fetchDropping(LocationName:string){
    this.http.get<String[]>('http://localhost:8082/locationsubsetlistbyname'+'/'+LocationName).subscribe(res =>{
      this.Dropping=res;
      // console.log(this.Dropping);


    })

  
    
 }

}
