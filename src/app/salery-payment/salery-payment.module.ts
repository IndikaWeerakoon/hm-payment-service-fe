import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleryRoutingModule } from './salery-routing.module';
import { SalaryListComponent } from './salery-list/salery-list.component';
import { PaymentService } from './payment.service';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SalaryListComponent, CreateTransactionComponent],
  imports: [CommonModule, SaleryRoutingModule, ReactiveFormsModule],
  providers: [PaymentService],
})
export class SalaryPaymentModule {}
