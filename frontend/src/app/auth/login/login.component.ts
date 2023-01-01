import { Component, OnInit } from '@angular/core';
import { CurUser } from '../curUser';
import { LoginService } from 'src/app/services/login.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthResponse } from 'src/app/utils/AuthResponse';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  curUser:CurUser=new CurUser("","");
  message:any;

  constructor(private service:LoginService,private router: Router){}

  ngOnInit(): void {
    
  }

  
  public LoginNow(){
    let res=this.service.doLogin(this.curUser);
    // console.log(this.message);
     res.subscribe(Data =>{
      
      //this.message = String(Data);
      //AuthResponse response = new AuthResponse(Data.result, Data.user, Data.message);
       let obj = JSON.parse(String(Data))
       this.service.userid = Number(obj.ok.id);
       console.log(obj.ok.id)
       let mp : Map<String, User> = new Map(Object.entries(obj))
       if ( obj.mail !== undefined ) {
         console.log("mail")
         this.message = "email doesn't exist, please sign up first"
       } else if (obj.pass !== undefined ) {
         console.log("pass")
         this.message = "Incorrect password"
       } else if ( obj.ok !== undefined ) {
         console.log("success")
         this.message = "Welcome!"
         this.service.user = obj.ok;
         this.router.navigate(['home'])
       }
//      console.log((this.message));
        // if(this.message!="password is incorrect" && this.message!="user doesn't exist, SignUp now"){
        //   this.service.userid=Number(this.message);
        //   console.log(this.service.userid);
        //  this.router.navigate(['home']);
        // }
        
    });
      
  
}
public SignUp(){
 this.router.navigate(['signup']);
}

}
