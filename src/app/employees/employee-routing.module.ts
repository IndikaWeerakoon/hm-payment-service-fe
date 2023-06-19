import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeMaintainComponent } from './employee-maintain/employee-maintain.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
  {
    path: 'create',
    component: EmployeeCreateComponent,
  },
  {
    path: ':id',
    component: EmployeeMaintainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
