import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   user = new User();
  constructor( private _service: RegistrationService, private _router: Router ) { }
  ngOnInit(): void {
  }

  SignUp()
  {
    this._service.resgisterUserFromRemote(this.user).subscribe(
      data=>{

        console.log("Response Received");
        alert("User Registered!!");
        this._router.navigate(['login'])
      },
     error => {
       console.log("Exception Occured");
       alert("Error occured. Invalid credentials or email id/user id already exists");
     }
     )
  }


}
