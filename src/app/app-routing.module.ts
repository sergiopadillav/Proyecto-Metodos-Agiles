import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo:'/home', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  { path: "adm",  component: EditEmployeeComponent, canActivate: [AuthGuard]},
  { path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
