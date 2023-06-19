import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee-service.service';
import { Router } from '@angular/router';
import { IEmployee } from '../types/employee.type';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent {
  employeeForm = this.fb.group({
    nic: ['', Validators.required],
    contactNo: ['', Validators.required],
    address: ['', Validators.required],
  });
  errorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private configService: ConfigService
  ) {}

  setError(error: string) {
    console.log(error);
    this.errorMessage = error;
  }

  onSubmit() {
    console.log(this.employeeForm.value);
    this.employeeService
      .addEmployee(this.employeeForm.value as IEmployee)
      .pipe(
        catchError(this.configService.catchError((err) => this.setError(err)))
      )
      .subscribe(() => {
        this.router.navigate(['/employee']);
      });
  }
}
