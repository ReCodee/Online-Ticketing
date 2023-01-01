import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Userprofile } from '../Models/profile.model';
import { User } from '../auth/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


 //userdata:Userprofile;

 fullName:String;

 userdata:Userprofile={
  userId:0,
  fullName:"",
  firstName:"",
  lastName:"",
  email:"",
  phone: "",
  gender:"",
  password:"",
  city:"",
  };

  tempdata:Userprofile={
    userId:0,
    fullName:"",
    firstName:"",
    lastName:"",
    email:"",
    phone: "",
    gender:"",
    password:"",
    city:"",
    };
  
   
  constructor(private http: HttpClient, private loginservice :LoginService) {
   
   }

  ngOnInit(): void {
    
    this.fullName = this.userdata.firstName + " " + this.userdata.lastName;  
    this.userdata.email = this.loginservice.user.email;
    this.userdata.city = this.loginservice.user.city;
    this.userdata.gender = this.loginservice.user.gender;
    this.userdata.fullName = this.loginservice.user.firstName + " " + this.loginservice.user.lastName;
    this.userdata.firstName = this.loginservice.user.firstName;
    this.userdata.lastName = this.loginservice.user.lastName;
    this.userdata.phone = this.loginservice.user.phone;
  }

  edit=false;

  editform()
  {
      this.edit= (this.edit==true)? false: true;
  }

   onSubmit(userform:NgForm){
    this.edit= (this.edit==true)? false: true;
    
   console.log(userform.form.value.email);
   this.userdata = userform.form.value;
   this.userdata.userId = this.loginservice.userid;
   let arr : string[] = this.fullName.split(' ');
   this.userdata.firstName = arr[1];
   this.userdata.lastName = arr[2];
    console.log(this.userdata);
 // console.log(this.userdata);
  this.onput();
   }


   onput(){
     let user = new User(this.userdata.firstName, this.userdata.lastName, this.userdata.email, this.userdata.password, this.userdata.phone, this.userdata.city, this.userdata.gender);
     console.log(user)
    //  this.http.put('http://localhost:8080/api/users/'+this.userdata.userId, user).subscribe(res =>{
    //    console.log(res);
    //  })
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
