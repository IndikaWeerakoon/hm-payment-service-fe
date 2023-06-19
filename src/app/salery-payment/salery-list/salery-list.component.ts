import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { PaymentService } from '../payment.service';
import { IEmployee } from 'src/app/employees/types/employee.type';
import { FormBuilder } from '@angular/forms';
import { SalaryRes } from '../type/salary-rasponse.type';

@Component({
  selector: 'app-salery-list',
  templateUrl: './salery-list.component.html',
  styleUrls: ['./salery-list.component.css'],
})
export class SalaryListComponent implements OnInit {
  public employees: IEmployee[] = [];
  public salaryPayments: SalaryRes[] = [];
  public employeeFilter = this.fb.group({
    empId: [''],
    year: [''],
  });
  public errorMessage = '';
  constructor(
    private paymentService: PaymentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paymentService
      .getEmployees(1)
      .subscribe((employees) => (this.employees = employees));
  }

  yearRange(start: number, step = 1) {
    const endYear = dayjs().year();
    return Array.from(
      { length: (endYear - start) / step + 1 },
      (value, index) => start + index * step
    );
  }

  onSubmit() {
    console.log(this.employeeFilter.value);
    if (
      this.employeeFilter.value.empId === '' ||
      this.employeeFilter.value.year === ''
    ) {
      this.errorMessage = 'Employee and year should be selected';
    } else {
      this.errorMessage = '';
      this.paymentService
        .getEmployeesalary(
          this.employeeFilter.value.empId!,
          +this.employeeFilter.value.year!
        )
        .subscribe((saleries) => (this.salaryPayments = saleries));
    }
  }
}
