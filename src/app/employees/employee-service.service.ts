import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { IEmployee } from './types/employee.type';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
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

  deleteEmployee(empId: string) {
    return this.httpClient.delete<any>(
      this.configService.getApiBaseUrl().concat(`employees/${empId}`)
    );
  }

  addEmployee(employee: IEmployee) {
    return this.httpClient.post<IEmployee>(
      this.configService.getApiBaseUrl().concat(`employees`),
      employee
    );
  }

  updateEmployee(employee: IEmployee, empId: string) {
    return this.httpClient.put<IEmployee>(
      this.configService.getApiBaseUrl().concat(`employees/${empId}`),
      employee
    );
  }
}
