import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Observable, catchError } from 'rxjs';
import { IEmployee } from '../employees/types/employee.type';
import { SalaryRes } from './type/salary-rasponse.type';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  getEmployees(status: number = -1): Observable<IEmployee[]> {
    const options = { params: new HttpParams().set('status', status) };

    return this.httpClient
      .get<IEmployee[]>(
        this.configService.getApiBaseUrl().concat('employees'),
        options
      )
      .pipe(catchError(this.configService.errorHandler([])));
  }

  getEmployeesalary(empId: string, year: number) {
    const options = { params: new HttpParams().set('year', year) };
    return this.httpClient.get<SalaryRes[]>(
      this.configService
        .getApiBaseUrl()
        .concat(`employees/${empId}/salary-payments`),
      options
    );
  }

  createEmployeesalary(empId: string, salaryAmount: number) {
    return this.httpClient.post<SalaryRes>(
      this.configService
        .getApiBaseUrl()
        .concat(`employees/${empId}/salary-payments`),
      { salaryAmount }
    );
  }
}
