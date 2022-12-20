import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private loginservice:LoginService ) {}

  ngOnInit(): void {
  }

  onProfile():void{
    this.router.navigate(['/profile'])
  }

  onMyBooking():void{
    this.router.navigate(['/myBooking'])
  }

  onHome():void{
    this.router.navigate(['/home'])
  }
  onLogin():void{
    this.router.navigate(['']);
    this.loginservice.userid = 0;
    localStorage.clear();

  }

  

}
