import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Person } from './Person';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  personalForm: FormGroup;
  personalDetails: Person = new Person();
  submitted = false;

  constructor(fb:FormBuilder, private customerservice:CustomerService,private _router: Router) {

    this.personalForm = fb.group({
      
      customerId:["",Validators.required],
      firstName:["",Validators.required],
      age:["",Validators.required],
      gender:["",Validators.required],
      email:["",Validators.required],
      mobile:["",Validators.required],
      state: ["",Validators.required],
      city: ["",Validators.required]
      
      
    });

  }

  ngOnInit():void {
    this.submitted = false;
    this.personalDetails = new Person();

  }

  save() {
   
    this.customerservice.createPersonal(this.personalDetails)
      .subscribe(data => console.log(data), error => console.log(error));
      this.personalDetails = new Person();
      console.log("Customer added");
      
   }

  onSubmit() {
    
    this.submitted = true;
    this.save();
    console.log(this.personalDetails);
    this._router.navigate(['identitydetails']);
  }

  login(){
    this._router.navigate(['identitydetails']);
  }

}
