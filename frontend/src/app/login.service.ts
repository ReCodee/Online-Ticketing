import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userid:number=0;
  constructor(private http:HttpClient) { }
   
  public doLogin(curUser:any){
    return this.http.post("http://localhost:8082/login",curUser,{responseType:'text' as 'json'});
  }
}
