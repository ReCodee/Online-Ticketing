import { Component, OnInit } from '@angular/core';
import { CouponService } from '../services/coupon.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupon',
  templateUrl: './confirmation.coupon.html',
  styleUrls: ['./confirmation.coupon.css']
})
export class confirmationcoupon implements OnInit {

  constructor(private router: Router, private couponService:CouponService) { }


  onCoupon(code:string):void {
    this.couponService.code = code;
    this.router.navigate(['/confirmation'])
  }


  ngOnInit(): void {
  }

}
