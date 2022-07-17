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
    username : '',
    password : ''
  }
  constructor(private auth: UserloginService,private router: Router) { }

  ngOnInit(): void {
  }
  userVerify(){
    this.auth.loginUser(this.User)
      .subscribe(
        res=>{
          console.log(res)
          // localStorage.setItem('token',res.token);
          // this.router.navigate(['/volunteer'])
        }
      )
  }

}
