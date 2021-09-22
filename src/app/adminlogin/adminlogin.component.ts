import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username= ''
  password=''
  

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this._router.navigate(['adminmain']);
  }
}
