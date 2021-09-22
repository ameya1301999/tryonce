import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loanoffer',
  templateUrl: './loanoffer.component.html',
  styleUrls: ['./loanoffer.component.css']
})
export class LoanofferComponent implements OnInit {

  loan:number=0;
  intrestRate:number=0;
  loantenure:number=0;
  profee:number=0;
  emi:number=0;
  
  

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  operation(val:number){
    
    if(val>=50000 && val<100000)
   { this.intrestRate=7.25
    this.loantenure=24
    this.profee=2500
    this.emi=Number (this.loan)*0.0891
  }
    
    else if (val>=100000 && val<500000)
    {this.intrestRate=7.3
    this.loantenure=48
    this.profee=3500
      this.emi=Number (this.loan)*0.075569
    }
    
    else if(val>=500000 && val<1000000)
    {this.intrestRate=7.40
      this.loantenure=72
      this.profee=4500
      this.emi=Number (this.loan)*0.074435
    }

      else if (val>=1000000 && val<1500000)
    {this.intrestRate=7.70
    this.loantenure=96
    this.profee=4500
    this.emi=Number (this.loan)*0.0770622
  }
    
  
}

redirect(){
  console.log("Redirecting")
  this._router.navigate(['personaldetails']);

}

    



}
