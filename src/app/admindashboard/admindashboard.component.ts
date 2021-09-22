import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { customerdata } from '../customerdata';
import { CustomersDetailsService } from '../customers-details.service';




@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  customers: any;

  constructor( private service: CustomersDetailsService ) { }

  ngOnInit(): void {
    this.customers= this.service.getCustomer().subscribe(data=> {console.log(data);
    this.customers=data;
    });

  }



}
