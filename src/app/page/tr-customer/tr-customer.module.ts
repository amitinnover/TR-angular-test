import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrCustomerRoutingModule } from './tr-customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CustomerListComponent,
    AddEditCustomerComponent
  ],
  imports: [
    CommonModule,
    TrCustomerRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TrCustomerModule { }
