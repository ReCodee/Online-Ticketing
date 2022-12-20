import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { SignupService } from 'src/app/signup.service';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  
  user:User=new User("","","","","","");
  message:any;
  // router: any;

  constructor(private service:SignupService,private router: Router){}

  ngOnInit(): void {
      
  }

  public signupNow(){
    let res=this.service.doSignup(this.user);
     res.subscribe((data)=>{this.message=data
     if(this.message=="Success"){
      this.router.navigate(['']);
    }});
     console.log(this.message);
}
  public Login(){
    this.router.navigate(['']);
  }
}