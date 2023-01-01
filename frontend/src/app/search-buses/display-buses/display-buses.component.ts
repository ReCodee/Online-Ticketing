import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bus } from 'src/app/bus';

import { SearchService } from 'src/app/services/search.service';



@Component({

selector: 'app-display-buses',

templateUrl: './display-buses.component.html',

styleUrls: ['./display-buses.component.css']

})

export class DisplayBusesComponent implements OnInit {



//@Input() busses : Bus[];



busses : Bus[]=[];



constructor(private service : SearchService, private router: Router) { }



ngOnInit(): void {



this.busses=this.service.buses;



console.log(this.busses);

console.log(this.service.buses);

}

onclick1(i : number)

{

this.service.busId=this.busses[i].vehicleId;

this.service.busName=this.busses[i].busName;

this.service.locationfrom = this.busses[i].from;

this.service.locationto = this.busses[i].to;

this.service.vehicleId = this.busses[i].vehicleId;


this.router.navigate(["/bookingseat"], { skipLocationChange: true });
}

}