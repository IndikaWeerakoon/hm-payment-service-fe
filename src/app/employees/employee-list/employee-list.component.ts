import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../types/employee.type';
import { Observable, of, switchMap } from 'rxjs';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  constructor(private employeeService: EmployeeService) {
    this.employees = [];
  }
  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((emp) => (this.employees = emp));
  }

  deleteEmployee(empId: string) {
    this.employeeService
      .deleteEmployee(empId)
      .pipe(switchMap(() => this.employeeService.getEmployees()))
      .subscribe((emp) => (this.employees = emp));
  }
}
