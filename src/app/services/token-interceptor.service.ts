import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { EmployeeService } from './employee.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private employeeService: EmployeeService) { }

  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `autorization ${this.employeeService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
