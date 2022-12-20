import { Injectable } from '@angular/core';
import { Bus } from './bus';


@Injectable({

providedIn: 'root'

})

export class SearchService {
buses : Bus[]=[];
busId : number=0;
busName : string="";
locationto : string="";
locationfrom : string="";
date : string="";
scheduledJourneyId:number;
constructor( ) { }




}