import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserloginService } from 'src/app/services/users-services/userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any){
    let auth = this.injector.get(UserloginService)
    let tokinizedReq = req.clone({
      setHeaders:{
        authorization:`Bearer ${auth.gettoken()}`
      }
    })
    return nxt.handle(tokinizedReq)
  }
}
