import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adm = {}
  constructor(
    private employeeService: EmployeeService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  signIn(){
    this.employeeService.loginAdmin(this.adm)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res['token']);
          this.router.navigate(['/adm']);
        }, 
        err => console.log(err)
        )
  }

}
