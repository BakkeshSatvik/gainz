import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000
    }
  };

  images:any = ['assets/images/firstScreen.png',
                'assets/images/secondScreen.png',
                'assets/images/thirdScreen.png',
                'assets/images/fourthScreen.png',
                'assets/images/fifthScreen.png',
                'assets/images/sixthScreen.png',
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoLogin(){
    this.router.navigate(['/login'])
  }
}
