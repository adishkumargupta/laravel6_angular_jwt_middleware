import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BeforeLoginService } from './before-login.service';
import { AftrLoginService } from './aftr-login.service';


const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
    canActivate: [BeforeLoginService]

  },
  {
    path: 'signup',
    component:SignupComponent,
    canActivate: [BeforeLoginService]

  },
  {
    path: 'profile',
    component:ProfileComponent,
    canActivate: [AftrLoginService]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
