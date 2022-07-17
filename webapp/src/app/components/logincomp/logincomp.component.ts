import { Component, OnInit } from '@angular/core';
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
  constructor(private auth: UserloginService) { }

  ngOnInit(): void {
  }
  userVerify(){
    alert('clicked');
    // this.auth.loginUser(this.User);{
    // }
  }

}
