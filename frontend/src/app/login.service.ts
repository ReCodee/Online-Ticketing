import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userid:number=0;
  constructor(private http:HttpClient) { }
   
  public doLogin(curUser:any){
    return this.http.get("http://localhost:8080/api/user/"+curUser.email,{responseType:'text' as 'json'});
  }
}
