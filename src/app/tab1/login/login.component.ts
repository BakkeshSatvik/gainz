import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router ) { }

  ngOnInit(): void {
  }

  gotoReg(){
    this.router.navigate(['/register']);
  }

  logIn(){
    this.router.navigate(['/dashboard']);
  }
}
//version 2.0.0