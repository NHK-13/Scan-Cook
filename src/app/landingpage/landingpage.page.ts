import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

  constructor(private router: Router) { }
  
  goSignin()
  {
    this.router.navigate(['signin']);
  }

  goConnect()
  {
    this.router.navigate(['home']);
  }
  
  ngOnInit() {
  }

}
