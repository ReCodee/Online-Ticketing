import { passenger } from "../Models/passenger.model";
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookingService{
    id:Number;
    totalpassengers:passenger[]=[];
    boarding_point:String="";
    dropping_point:String="";
    amount=0;
    busID:String="";
    BusName:String="Heera Thakur bus enterprises";
     
}