import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersignupService } from 'src/app/services/users-signup/usersignup.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  constructor(private signup:UsersignupService) {}

  ngOnInit(): void {
  }
  User = {
    name: '',
    email : '',
    password : '',
    role: ''
  }
  userVerify(usersignup: NgForm): void{
    this.signup.adduser(usersignup.value)
  }
  getUserData(): void{
    
  }

  pwdvalidate(){
    alert('sas');
}
}
