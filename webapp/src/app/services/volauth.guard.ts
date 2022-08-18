import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserloginService } from './users-services/userlogin.service';


@Injectable({
  providedIn: 'root'
})
export class VolauthGuard implements CanActivate {
  constructor(private auth:UserloginService,private route:Router){}
  canActivate():boolean{
    if ( this.auth.volAuth() ) return true;
    else {
    let x= localStorage.getItem('role');
    this.route.navigate([``])
    return false;
    }
  }
  
}
export class GuesauthGuard implements CanActivate {
  constructor(private auth:UserloginService,private route:Router){}
  canActivate():boolean{
    if ( this.auth.guesAuth() ) return true;
    else {
    let x= localStorage.getItem('role');
    this.route.navigate([``])
    return false;
    }
  }
  
}

export class CandauthGuard implements CanActivate {
  constructor(private auth:UserloginService,private route:Router){}
  canActivate():boolean{
    if ( this.auth.candAuth() ) return true;
    else {
    let x= localStorage.getItem('role');
    console.log(x);
    this.route.navigate([``])
    return false;
    }
  }
  
}
