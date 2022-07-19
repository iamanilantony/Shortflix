import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/services/users-services/userlogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  constructor(public auth:UserloginService) { }

  ngOnInit(): void {
  }
  logoutbtn(){
    this.auth.logout();
  }

}
