import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { UserloginService } from '../../services/users-services/userlogin.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {
  User = {
    email : '',
    password : ''
  }
  constructor(
    private auth: UserloginService,
    private router: Router, 
    public googleAuthService : AuthService
    ) { }

  ngOnInit(): void {
  }
  userVerify(){
    this.auth.loginUser(this.User)
    .subscribe(
      res=>{
            localStorage.setItem('token',res.token);
            localStorage.setItem('name',res.name);
            localStorage.setItem('role',res.role);
            localStorage.setItem('id',res._id);
            switch(res.role){
              case "volunteer":{
                this.router.navigate(['volunteer'])
                break;
              }
              case "guest":{
                this.router.navigate(['guest'])
                break;
              }
              case "viewer":{
                this.router.navigate([''])
                break;
              }
              case "candidate":{
                this.router.navigate(['/candidate'])
                break;
              }
            }
          }
    )
  }
  public googleSignIn(): void{
    this.googleAuthService.loginWithRedirect()
      // .then((data)=>{
      //   localStorage.setItem('google_auth',JSON.stringify(data));
      //   this.router.navigateByUrl('/volunteer').then();
      // })
      // .catch((e)=>{
      //   console.log('Could not submit google auth',e);
      // })
  }
  public onSignIn(googleUser:any):void {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
