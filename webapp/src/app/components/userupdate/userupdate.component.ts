import { Component, Input, OnInit } from '@angular/core';
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
  Userc = {
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
          console.log(res);
          this.userinfo = res
          this.Userc.name=this.userinfo.name;
          this.Userc.email=this.userinfo.email;
          this.Userc.password=this.userinfo.password;
          this.Userc.role=this.userinfo.role;
          console.log(this.Userc);
          return this.User;
        }
      )
  }
  updateUserData(userupdateUser:NgForm): void{
    console.log(this.Userc);
    this.user.updateUser(this.id,this.Userc);
  }
}
