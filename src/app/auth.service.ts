import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LOCAL_BASE_URL } from './server';


const _loginUrl = `${LOCAL_BASE_URL}/apilog/login_check`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = `${LOCAL_BASE_URL}/apilog/register`


  constructor(private http: HttpClient, private router: Router, private menuCtrl: MenuController) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(_loginUrl, user, { responseType: 'json' })
      .pipe(
        map((data) => {
          if (data) {
            console.log(data);
            localStorage.setItem('jwt', data.token);
          }
        })
      )
  }

  loggedIn() {
    return !!localStorage.getItem('jwt')
  }

  getToken() {
    return localStorage.getItem('jwt')
  }

  logoutUser() {
    this.router.navigate(['landing'])
    this.menuCtrl.enable(false)
    return localStorage.removeItem('jwt')
  }
}
