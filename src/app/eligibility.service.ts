import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eligibility } from './eligibility';

@Injectable({
  providedIn: 'root'
})
export class EligibilityService {

  constructor(private httpClient:HttpClient) 
  { }
  baseUrl:string="http://localhost:9997/api/eligibilityRest";

  //RETRIEVING ALL PRODUCTS
  getAllEligibility()
  {
    return this.httpClient.get(this.baseUrl+"/eligibility");
  }

  //ADDING PRODUCT
  addNewEligibility(eligibility:Eligibility)
  {
    return this.httpClient.post(this.baseUrl+"/eligibility",eligibility);
  }
}
