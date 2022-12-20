import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Userprofile } from '../Models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


 //userdata:Userprofile;
 userdata:Userprofile={
  userId:0,
  username:"",
  email:"",
  phone: "",
  gender:"",
  password:"",
  city:"",
  };

  tempdata:Userprofile={
    userId:0,
    username:"",
    email:"",
    phone: "",
    gender:"",
    password:"",
    city:"",
    };
  
   
  constructor(private http: HttpClient, private loginservice :LoginService) {
   
   }

  ngOnInit(): void {
      
    this.onfetchdata(this.loginservice.userid); 
  }

  edit=false;

  editform()
  {
      this.edit= (this.edit==true)? false: true;
  }

   onSubmit(userform:NgForm){
    this.edit= (this.edit==true)? false: true;
   console.log(userform);
 
    
 // console.log(this.userdata);
  this.onput();
   }


   onput(){
     this.http.put('http://localhost:8082/myprofile/edit',this.userdata).subscribe(res =>{
       //console.log(res);
     })
   }


   onfetchdata(id){
     var temp1=this.userdata.userId.toString();
     var temp=id.toString();
     this.http.post<Userprofile>('http://localhost:8082/myprofile', temp).subscribe(res =>{
     this.userdata=res; 
     this.tempdata=res;
    // console.log(res);
     })
   }


   onCancel(){
    this.edit= (this.edit==true)? false: true;
    this.onfetchdata(this.loginservice.userid);
   }


}
