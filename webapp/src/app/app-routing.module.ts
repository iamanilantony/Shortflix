import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { CandidateComponent } from './containers/candidate/candidate.component';
import { LoginComponent } from './containers/common/login/login.component';
import { GuestComponent } from './containers/guest/guest.component';
import { ViewComponent } from './containers/view/view.component';
import { VolunteerComponent } from './containers/volunteer/volunteer.component';
import { AuthGuard } from './services/users-services/auth.guard';
import { CandidateComponent } from './containers/candidate/candidate.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'volunteer',canActivate:[AuthGuard], component: VolunteerComponent},
<<<<<<< HEAD
  {path: '',canActivate:[AuthGuard], component: ViewComponent},
  {path: 'guest',canActivate:[AuthGuard], component: GuestComponent},//
  {path: 'candidate',canActivate:[AuthGuard], component: CandidateComponent},
  {path: 'updateuser',canActivate:[AuthGuard], component: UserupdateComponent},
=======
  {path: 'candidate', component: CandidateComponent}
>>>>>>> 7f468ad (movie model-->DB)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
