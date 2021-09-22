import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentitydetailsComponent } from "./identitydetails/identitydetails.component"
import { PersonaldetailsComponent } from "./personaldetails/personaldetails.component"
import { EligibilityComponent } from './eligibility/eligibility.component';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component: PersonaldetailsComponent},
  { path: 'login',component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: '', component: SignupComponent},
  {path: 'eligibility', component: EligibilityComponent},
  {path: 'loanoffer', component: LoanofferComponent},
  { path: 'identitydetails', component: IdentitydetailsComponent },
  { path: 'personaldetails', component: PersonaldetailsComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  {path: 'admindashboard', component: AdmindashboardComponent},
  {path: 'adminmain', component: AdminmainComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'logout', component: LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
