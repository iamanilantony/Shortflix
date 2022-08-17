import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/services/users-services/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  User = {
    name: '',
    role: '',
  }
  constructor(public auth:UserloginService, private route:Router) { }

  ngOnInit(): void {
        this.User.name = localStorage.getItem('name') || '';
  }
  logoutbtn(){
    this.auth.logout();
  }
  homebtn(){
    let role = localStorage.getItem('role') || '';
    if(role === 'volunteer') this.route.navigate(['volunteer']);
    else if(role === 'guest') this.route.navigate(['guest']);
    else if(role === 'candidate') this.route.navigate(['candidate']);
    else if(role === 'viewer') this.route.navigate(['viewer']);

  }

}
