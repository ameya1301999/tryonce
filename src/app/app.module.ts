import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { IdentitydetailsComponent } from './identitydetails/identitydetails.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { CustomersDetailsService } from './customers-details.service';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    EligibilityComponent,
    IdentitydetailsComponent,
    PersonaldetailsComponent,
    LoanofferComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminmainComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomersDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
