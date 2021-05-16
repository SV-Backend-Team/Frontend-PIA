import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() customers: Customer[];
  @Input() customerID_sel: string = undefined;
  @Input() customerID_del: string = undefined;
  @Input() created_succesfully: number = 0;
  @Input() deleted_succesfully: number = 0;
  @Input() customer: Customer = null;
  @Input() customerForm: FormGroup

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log("Init")
    this.searchcustomers()
    console.log("search")
    this.customerForm = this.formBuilder.group({
      CompanyName: new FormControl(''),
      ContactName: new FormControl(''),
    });
    console.log("end init")
  }
  
  searchcustomers() {
    this.customerService.GetCustomers().then(
      res => {
        this.customers = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  searchcustomer() {
    this.customerService.GetCustomerByID(this.customerID_sel).then(
      res => {
        this.customer = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  savecustomer() {
    var customer: Customer = this.customerForm.value;
    console.log(customer);
    this.customerService.CreateCustomer(customer).then(
      res => {
        this.created_succesfully = 1;
        this.searchcustomers()
      },
      error => {
        this.created_succesfully = -1;
        console.log(error);
      }
    )
  }

  deletecustomer() {
    this.customerService.DeleteCustomerByID(this.customerID_del).then(
      res => {
        this.deleted_succesfully = 1
        this.searchcustomers()
      },
      error => {
        this.deleted_succesfully = -1
        console.log(error);
      }
    );
  }

}
