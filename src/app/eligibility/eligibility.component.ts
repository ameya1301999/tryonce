import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Eligibility } from '../eligibility';
import { EligibilityService } from '../eligibility.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']

})
export class EligibilityComponent implements OnInit {
  elig:Eligibility;
  eligibilityForm = new FormGroup({
    brandname: new FormControl('',Validators.required),
    modelno: new FormControl('',Validators.required),
    exprice: new FormControl('',Validators.required),
    onprice: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    mobileno: new FormControl('',Validators.required),
    firstname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    employmentType: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    age: new FormControl('', Validators.required),
    employmentStatus: new FormControl('',Validators.required),
    income: new FormControl('', Validators.required)
    
    
  })

  get f(){
    return this.eligibilityForm.controls;

  }
  
  constructor(private eligservice:EligibilityService, private _router: Router) {
    this.elig=new Eligibility();
 }

  ngOnInit(): void {
  
  }
  saveData()
  {

      this.eligservice.addNewEligibility(this.elig).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data); 
        }
      )
    
  }
  
  

  checkEligibililty() {
    const value = this.eligibilityForm.value;

    if (value.age < 18) {
      return alert("You are not eligible");
    }

    else if (value.employmentStatus !== "employed") {
      return alert("You are not eligible");
    }

    else if (value.income < 300000) {
      return alert("You are not eligible");
    }
    else{

    this._router.navigate(['loanoffer']);}
  }
  

}
