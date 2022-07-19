import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  User = {
    email : '',
    password : '',
    role: ''
  }
  userVerify(usersignup: NgForm): void{
    console.log(usersignup.value);
    alert('clicked');
  }
  pwdvalidate(){
    alert('sas');
}
}
