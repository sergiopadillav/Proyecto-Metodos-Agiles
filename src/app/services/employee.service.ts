import { Injectable } from '@angular/core';
import { HttpClient}  from "@angular/common/http"
import { Employee } from '../models/employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  
  employees: Employee[];
  readonly URL_API = "http://localhost:3000/employee";
  readonly URL_API_ADM = "http://localhost:3000/signin";


  constructor(private http: HttpClient,private router: Router) {
    this.selectedEmployee = new Employee();
   }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee){
    return this.http.post(this.URL_API, Employee);
  }

  putEmployee(Employee: Employee){
    return this.http.put(this.URL_API + `/${Employee._id}`, Employee);
  }

  loginAdmin(adm){
    return this.http.post(this.URL_API_ADM, adm);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
