



import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signUp/signUp.component';
import { confirmationcoupon } from './coupons/confirmation.coupon';
import { BookingseatComponent } from './bookingseat/bookingseat.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { ContactUsComponent } from './footer/contact-us/contact-us.component';
import { FeedbackComponent } from './footer/feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './footer/help/help.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TAndCComponent } from './footer/t-and-c/t-and-c.component';
import { HeaderComponent } from './header/header.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayBusesComponent } from './search-buses/display-buses/display-buses.component';
import { SearchBusesComponent } from './search-buses/search-buses.component';
import { FeedBackComponent } from './feedback/feedback.component';


const routes: Routes = [
  
  {path : 'home', component : SearchBusesComponent},
  {path : 'feedback', component : FeedBackComponent },
  {path : 'displaybuses', component : DisplayBusesComponent},
  {path: '',component:LoginComponent},
  {path : 'confirmation' , component : ConfirmationComponent },
  {path : 'profile',component : ProfileComponent},
  {path : 'myBooking' ,component: MybookingsComponent},
  {path : 'bookingseat' ,component:BookingseatComponent},
  {path : '' , component:FooterComponent,outlet:'footerRouter'},
  { path: 'aboutus' , component: AboutUsComponent, outlet:'footerRouter' },
  { path: 'contactus' , component: ContactUsComponent, outlet:'footerRouter'},
  { path: 'feedback' , component: FeedbackComponent, outlet:'footerRouter'},
  { path: 'help' , component: HelpComponent, outlet:'footerRouter'},
  { path: 'privacypolicy' , component: PrivacyPolicyComponent, outlet:'footerRouter'},
  { path: 'tandc' , component: TAndCComponent, outlet:'footerRouter'},
 
  {path:'signup',component:SignUpComponent},
  {path:'coupon',component:confirmationcoupon}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


