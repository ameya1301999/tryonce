import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { identity } from './identity';

@Component({
  selector: 'app-identitydetails',
  templateUrl: './identitydetails.component.html',
  styleUrls: ['./identitydetails.component.css']
})
export class IdentitydetailsComponent implements OnInit {

  myReactiveForm: FormGroup;
  identity1: identity = new identity();
  submitted = false;

  constructor(fb:FormBuilder, private customerservice:CustomerService) {

    this.myReactiveForm = fb.group({
      
      aadharnumber:["",Validators.required],

      pannumber:["",Validators.required],
      
      
    });

  }

  ngOnInit():void {
    this.submitted = false;
    this.identity1 = new identity();

  }

  save() {
   
    this.customerservice.createCustomer(this.identity1)
      .subscribe(data => console.log(data), error => console.log(error));
      this.identity1 = new identity();
      console.log("Customer added");
      alert("Your Application form is submitted")
   }

  onSubmit() {
    
    this.submitted = true;
    this.save();
    console.log(this.identity1);
  }
}