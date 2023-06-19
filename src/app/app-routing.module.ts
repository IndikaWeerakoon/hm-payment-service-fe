import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'salary',
    loadChildren: () =>
      import('./salery-payment/salery-payment.module').then(
        (m) => m.SalaryPaymentModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'employee',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
