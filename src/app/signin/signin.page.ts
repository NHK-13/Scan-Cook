import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  userRegistrationData = {}
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

 registerUser()
  {
    this._auth.registerUser(this.userRegistrationData)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )
      alert('Inscription réussi, vous pouvez désormais vous connectez')
      this.router.navigate(['home'])
  }

}
