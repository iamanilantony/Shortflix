import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerComponent } from './containers/volunteer/volunteer.component';
import { LoginComponent } from './containers/common/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LogincompComponent } from './components/logincomp/logincomp.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserloginService } from './services/users-services/userlogin.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './components/logincomp/token-interceptor.service';
import { UsersignupService } from './services/users-signup/usersignup.service';
import { ViewComponent } from './containers/view/view.component';
import { GuestComponent } from './containers/guest/guest.component';
import { CandidateComponent } from './containers/candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent,
    LoginComponent,
    HeaderComponent,
    LogincompComponent,
    SignupComponent,
    ViewComponent,
    GuestComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [UserloginService,UsersignupService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
