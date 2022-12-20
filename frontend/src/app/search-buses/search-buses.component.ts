import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, from } from 'rxjs';
import { Bus } from '../bus';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.css']
})
export class SearchBusesComponent implements OnInit {


  from : string ;
  to : string ;
  date : string ;
  
  buses : Bus[] =[];
  
  values : string[]=[];
  
  values1 : string[]=[];

  constructor(private httpClient : HttpClient,
              private _route : Router,
              private service1 : SearchService) { }

  ngOnInit(): void {

    this.from=this.service1.locationto;
    this.to=this.service1.locationfrom;
    this.date = this.service1.date;

  }


  onClick()
  {

    this.httpClient.get<Bus[]>('http://localhost:8082/display/'+this.from+'/'+this.to+'/'+this.date).subscribe(data => {
      //this.buses=data;
      this.service1.buses=data;
      // console.log(this.buses);
      // console.log(this.service.buses);
      this.service1.locationto=this.from;
      this.service1.locationfrom=this.to;
      this.service1.date=this.date;

      this._route.navigate(['/displaybuses']);
    });
    
  }

  onKey(value: string) {
    if(this.from!="")
    this.httpClient.get<string[]>('http://localhost:8082/search/'+this.from)
      .pipe(debounceTime(1000))
      .subscribe(data => {
      this.values=data;
    })
  }

  onKey1(value: string) {
    if(this.from!="")
    this.httpClient.get<string[]>('http://localhost:8082/search/'+this.to)
      .pipe(debounceTime(1000))
      .subscribe(data => {
      this.values1=data;
    })
  }
}







