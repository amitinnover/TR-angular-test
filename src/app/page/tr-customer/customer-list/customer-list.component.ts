import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/core/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetail();
  }

  getCustomerDetail(){
    this.customerService.getCustomerDetail().subscribe((response)=>{
      debugger
    },
    (error)=>{
      console.log(error);

    })
  }

}
