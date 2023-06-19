import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/employees/types/employee.type';
import { PaymentService } from '../payment.service';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css'],
})
export class CreateTransactionComponent implements OnInit {
  public employees: IEmployee[] = [];
  public errorMessage: string = '';
  public salaryForm = this.fb.group({
    empId: ['', Validators.required],
    salaryAmount: ['', Validators.required],
  });

  constructor(
    private paymentService: PaymentService,
    private fb: FormBuilder,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paymentService
      .getEmployees(1)
      .subscribe((employees) => (this.employees = employees));
  }

  setError(error: string) {
    this.errorMessage = error;
  }

  onSubmit() {
    this.setError('');
    if (this.salaryForm.valid) {
      const { empId, salaryAmount } = this.salaryForm.value;
      this.paymentService
        .createEmployeesalary(empId!, +salaryAmount!)
        .pipe(
          catchError(this.configService.catchError((err) => this.setError(err)))
        )
        .subscribe(() => this.router.navigate(['/salary']));
    } else {
      this.setError('Fill all mandatory fields');
    }
  }
}
