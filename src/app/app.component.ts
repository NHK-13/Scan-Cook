import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Nos Recettes',
      url: '/recette',
      icon: 'pizza'
    },
    {
      title: 'Scan code-barre',
      url: '/scanner',
      icon: 'qr-scanner'
    },
    {
      title: 'Mes Favoris',
      url: '/mes-favoris',
      icon: 'heart'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public _authService: AuthService
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      /*if(!this._authService.loggedIn()) {
        this.menuCtrl.enable(false);
      }*/
    });
  }
}
