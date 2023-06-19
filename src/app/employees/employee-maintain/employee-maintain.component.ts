import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IEmployee } from '../types/employee.type';
import { EmployeeService } from '../employee-service.service';
import { catchError } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-employee-maintain',
  templateUrl: './employee-maintain.component.html',
  styleUrls: ['./employee-maintain.component.css'],
})
export class EmployeeMaintainComponent implements OnInit {
  employeeForm = this.fb.group({
    nic: ['', Validators.required],
    contactNo: ['', Validators.required],
    address: ['', Validators.required],
    activeStatus: [true],
  });
  errorMessage: string = '';
  empId: string | null = '';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private employeeService: EmployeeService,
    private router: Router,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.empId = this.route.snapshot.paramMap.get('id');
    const state = this.location.getState() as IEmployee;
    this.employeeForm.setValue({
      address: state.address,
      contactNo: state.contactNo,
      nic: state.nic,
      activeStatus: !!state.activeStatus,
    });
  }

  setError(error: string) {
    this.errorMessage = error;
  }

  onSubmit() {
    this.employeeService
      .updateEmployee(
        this.employeeForm.value as unknown as IEmployee,
        this.empId!
      )
      .pipe(
        catchError(this.configService.catchError((err) => this.setError(err)))
      )
      .subscribe(() => {
        this.router.navigate(['/employee']);
      });
  }
}
