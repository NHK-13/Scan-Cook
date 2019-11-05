import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('jwt')) {
      if (!req.url.includes("openfoodfact")) {
        let authService = this.injector.get(AuthService);
        let tokenizedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${authService.getToken()}`
          }
        });
        return next.handle(tokenizedReq);
      }
    }
    return  next.handle(req);
  }
}
