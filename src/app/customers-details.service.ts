import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersDetailsService {

  constructor(private httpclient: HttpClient) { }

  getCustomer(){
    return this.httpclient.get("http://localhost:9997/api/personaldetails");
  }
}
