import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  base_url = 'http://localhost:9997/api';

  constructor(private httpClient:HttpClient) { }

  createCustomer(customer: Object): Observable<Object> {
    console.log(this.httpClient.post(`${this.base_url}`+'/addidentitydetails', customer))
    return this.httpClient.post(`${this.base_url}`+'/addidentitydetails', customer);
   }

   createPersonal(customer: Object): Observable<Object> {
    console.log(this.httpClient.post(`${this.base_url}`+'/addpersonaldetails', customer))
    return this.httpClient.post(`${this.base_url}`+'/addpersonaldetails', customer);
   }
  
  
  
  
  
  
  
}
