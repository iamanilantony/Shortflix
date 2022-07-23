import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserloginService } from 'src/app/services/users-services/userlogin.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  userData:any;

  constructor(private user:UserloginService) {
  }
  
  
  ngOnInit(): void {
    this.User = this.getUserData()
  }
  id:any 
  userinfo: any
  User = {
    name: '',
    email : '',
    password : '',
    role: ''
  }
  getUserData(): any{
    this.id = localStorage.getItem('id') || '';
    this.user.getUser(this.id)
      .subscribe(
        res=>{
          this.userinfo = res
          this.User.name=this.userinfo.name;
          this.User.email=this.userinfo.email;
          this.User.password=this.userinfo.password;
          this.User.role=this.userinfo.role;
          console.log(this.User);
          return this.User;
        }
      )
  }
  updateUserData(userupdateUser:NgForm): void{

  }
}
