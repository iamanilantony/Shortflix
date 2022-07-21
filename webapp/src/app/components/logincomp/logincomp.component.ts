import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../../services/users-services/userlogin.service';
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
  constructor(private auth: UserloginService,private router: Router) { }

  ngOnInit(): void {
  }
  userVerify(){
    this.auth.loginUser(this.User)
    .subscribe(
      res=>{
            localStorage.setItem('token',res.token);
            localStorage.setItem('name',res.name);
            localStorage.setItem('role',res.role);
            localStorage.setItem('id',res.id);
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

}
