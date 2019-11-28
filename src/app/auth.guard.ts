import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { EmployeeService  } from "./services/employee.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ){}

  canActivate(){
    if(this.employeeService.loggedIn()){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
