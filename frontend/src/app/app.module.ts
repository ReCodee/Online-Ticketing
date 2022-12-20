import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './confirmation/payment/payment.component';
import { TravellersComponent } from './confirmation/travellers/travellers.component';
import { SearchBusesComponent } from './search-buses/search-buses.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { MybookingsComponent } from  './mybookings/mybookings.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { BookingseatComponent } from './bookingseat/bookingseat.component';
import { BookingService } from './bookingseat/bookingseat.service';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { ContactUsComponent } from './footer/contact-us/contact-us.component';
import { FeedbackComponent } from './footer/feedback/feedback.component';
import { HelpComponent } from './footer/help/help.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TAndCComponent } from './footer/t-and-c/t-and-c.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signUp/signUp.component';

import { DisplayBusesComponent } from './search-buses/display-buses/display-buses.component';
import { authGaurd } from './auth/authGaurd.service';

const appRoutes : Routes=[
  { path: '' , component: FooterComponent , outlet:'footerRouter'},
  { path: 'aboutus' , component: AboutUsComponent, outlet:'footerRouter'},
  { path: 'contactus' , component: ContactUsComponent, outlet:'footerRouter'},
  { path: 'feedback' , component: FeedbackComponent, outlet:'footerRouter'},
  { path: 'help' , component: HelpComponent, outlet:'footerRouter'},
  { path: 'privacypolicy' , component: PrivacyPolicyComponent, outlet:'footerRouter'},
  { path: 'tandc' , component: TAndCComponent, outlet:'footerRouter'},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfirmationComponent,
    PaymentComponent,
    TravellersComponent,
    ProfileComponent,
    FooterComponent,
    MybookingsComponent,
    BookingseatComponent,
    AboutUsComponent,
    ContactUsComponent,
    FeedbackComponent,
    HelpComponent,
    PrivacyPolicyComponent,
    TAndCComponent,
    DisplayBusesComponent,
    SearchBusesComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [BookingService , authGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
