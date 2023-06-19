import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryListComponent } from './salery-list/salery-list.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: SalaryListComponent,
  },
  {
    path: 'create',
    component: CreateTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleryRoutingModule {}
