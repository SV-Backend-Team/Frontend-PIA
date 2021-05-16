import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService{

    private BASE_URL: string = "http://localhost:5000/api/customer/";
    constructor(
        private httpClient: HttpClient
    ){}

    GetCustomers(){
        return this.httpClient.get(this.BASE_URL + "getcustomers")
                    .toPromise()
                    .then(res => res as Customer[])
    }

    GetCustomerByID(id: string){
        return this.httpClient.get(this.BASE_URL + "getcustomer/" + id)
                    .toPromise()
                    .then(res => res as Customer)
    }

    CreateCustomer(customer: Customer){
        return this.httpClient.post(this.BASE_URL + "createcustomer", customer)
                    .toPromise()
                    .then(res => res as Customer)
    }

    DeleteCustomerByID(id: string){
        return this.httpClient.delete(this.BASE_URL + "deletecustomer/" + id)
                    .toPromise()
                    .then(res => res as Customer)
    }
}