import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data;
  @Input() user;

  loginUserData = {}
  constructor(private router: Router, private _auth: AuthService, private formBuilder: FormBuilder) {}
  
  // Récupération de la valeur des input

  get username() { return this.loginForm.get('email')};

  get password() { return this.loginForm.get('password'); };

  loginForm: FormGroup;
  loading: boolean;
  error: string;

  ngOnInit()
  {
    // construction du formulaire
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        ]),
    });
  }

  goSignin()
  {
    this.router.navigate(['signin']);
  }

  // loginUser() {
  //   this._auth.loginUser(this.loginUserData)
  //     .subscribe(
  //       res => console.log(res),
  //       err => console.log(err)
  //     )
  // }
  
  onSubmit() {
      console.log(this.loginForm.value)
     this._auth.loginUser(this.loginForm.value).subscribe(
        // traitement de la réponse HTTP, en cas d'erreur on affiche
        // l'erreur dans la vue
        user => {
          console.log(user);

           // redirection
          this.router.navigate(['recette']);
        },
        error => {
          this.error = error;
          // console.log(error, 'ok composant');
        }
      );
      }
  }

