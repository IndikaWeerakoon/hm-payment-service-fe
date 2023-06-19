import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeMaintainComponent } from './employee-maintain/employee-maintain.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee-service.service';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeMaintainComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule, ReactiveFormsModule],
  providers: [EmployeeService],
})
export class EmployeesModule {}
