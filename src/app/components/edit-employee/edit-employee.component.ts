import { Component, OnInit, getPlatform } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from 'src/app/models/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  postEmployee(form?: NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form)
          this.getEmployees();
        })
    } else { 
      this.employeeService.postEmployee(form.value)
        .subscribe(res =>{
          console.log(res);
          this.resetForm(form);
          this.getEmployees();
      });
    } 
  }

  
  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  } 

}
