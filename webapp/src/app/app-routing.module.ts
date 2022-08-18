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
import { EventPageComponent } from './components/event-page/event-page.component';
import { VolauthGuard, GuesauthGuard, CandauthGuard } from './services/volauth.guard';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'volunteer',canActivate:[AuthGuard, VolauthGuard], component: VolunteerComponent},
  {path: '',canActivate:[AuthGuard], component: ViewComponent},
  {path: 'guest',canActivate:[AuthGuard], component: GuestComponent},
  {path: 'candidate',canActivate:[AuthGuard, CandauthGuard], component: CandidateComponent},
  {path: 'updateuser',canActivate:[AuthGuard], component: UserupdateComponent},
  {path: 'event/:id',canActivate:[AuthGuard, VolauthGuard], component: EventPageComponent},
  {path: 'movie/:id',canActivate:[AuthGuard], component: MoviePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
