import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/common/login/login.component';
import { VolunteerComponent } from './containers/volunteer/volunteer.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'volunteer', component: VolunteerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
