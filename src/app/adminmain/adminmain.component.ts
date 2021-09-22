import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  login1(){
    this._router.navigate(['admindashboard']);
  }

}
