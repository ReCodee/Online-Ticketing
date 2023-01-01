import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { SignupService } from 'src/app/services/signup.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  
  user:User=new User("","","","","","","");
  message:any;
  // router: any;

  constructor(private service:SignupService,private router: Router, private loginservice:LoginService){}

  ngOnInit(): void {
      
  }

  public signupNow(){
     let res=this.service.doSignup(this.user);
      res.subscribe((data)=>{this.message=data
      if(data){
        this.service.user = this.user;
        this.loginservice.user = this.user;
        this.router.navigate(['/home']);
    }}); 
     if ( !this.message ) {
        this.message = "User already exists";  
     }
}
  public Login(){
    this.router.navigate(['']);
  }
}