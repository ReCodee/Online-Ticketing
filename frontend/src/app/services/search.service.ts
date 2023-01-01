import { Injectable } from '@angular/core';
import { Bus } from '../bus';


@Injectable({

providedIn: 'root'

})

export class SearchService {
buses : Bus[]=[];
vehicleId:number;
busId : number=0;
busName : string="";
locationto : string="";
locationfrom : string="";
date : string="";
scheduledJourneyId:number;
price:string;
constructor( ) { }




}