import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserloginService } from './userlogin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:UserloginService,private route:Router){}
  canActivate():boolean{
    if( this.auth.authrequest() ){
        return true
    }
    else{
        this.route.navigate(['volunteer'])
        return false;
    }
  }
  
}
