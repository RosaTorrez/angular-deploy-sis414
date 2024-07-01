import { Routes } from '@angular/router';
import { LoginComponent } from './autentication/login/login.component';
import { AcountComponent } from './autentication/acount/acount.component';
import { RegisterComponent } from './Dashboard/register/register.component';
import { PasswordComponent } from './autentication/password/password.component';
import { HomeComponent } from './Pag_user/home/home.component';
import { DashCruComponent } from './Pag_user/dash-cru/dash-cru.component';
import { DashComponent } from './Pag_user/dash/dash.component';
import { PelisfComponent } from './Peliculas/pelisf/pelisf.component';
import { DescripComponent } from './Peliculas/descrip/descrip.component';
import { DeleteUseComponent } from './Dashboard/delete-use/delete-use.component';

export const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch: 'full'},
  {path:'dashboard', component: DashComponent},
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createAcount',component: AcountComponent},
  {path: 'addMovie', component: RegisterComponent},
  {path: 'reset', component: PasswordComponent},
  {path: 'crud', component: DashCruComponent },
  { path: 'movies', component: PelisfComponent},
  { path: 'reproductor', component: DescripComponent},
  { path: 'users', component: DeleteUseComponent}
];
