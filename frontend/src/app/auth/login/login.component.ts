import { Component, OnInit } from '@angular/core';
import { CurUser } from '../curUser';
import { LoginService } from 'src/app/login.service';
import { Router, RouterModule, Routes } from '@angular/router';
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

      this.message = String(Data);

      console.log(Data);
      console.log((this.message));
      // if((this.message)=="user doesn't exist"){
      //   this.router.navigate(['signup']);
      //   }
        if(this.message!="password is incorrect" && this.message!="user doesn't exist, SignUp now"){
          this.service.userid=Number(this.message);
          console.log(this.service.userid);
         this.router.navigate(['home']);
        }
        
    });
      
  
}
public SignUp(){
 this.router.navigate(['signup']);
}

}
