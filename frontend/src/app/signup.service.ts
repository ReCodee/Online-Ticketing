import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public doSignup(user:any){
    return this.http.post("http://localhost:8080/api/users",user,{responseType:'text' as 'json'});
  }
}
