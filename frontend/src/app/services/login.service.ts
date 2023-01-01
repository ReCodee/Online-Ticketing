import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userid:number=0;
  user: User;
  ticketid:Number;
  constructor(private http:HttpClient) { }
   
  public doLogin(curUser:any){
    console.log("yha pe")
    return this.http.post("http://localhost:8080/api/user",curUser, {responseType:'text' as 'json'});
  }
}
