import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http: HttpClient ) { }
  baseUrl:string="http://localhost:9997/api";
  public loginUserFromRemote(user: User):Observable<any>
  {
    return this._http.post<any>("http://localhost:9997/login",user);
  }
  
  public resgisterUserFromRemote(user : User):Observable<any>
  {
    return this._http.post<any>("http://localhost:9997/registeruser",user);
  }

}
