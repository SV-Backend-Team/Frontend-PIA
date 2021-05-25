import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService{

    private BASE_URL: string = "http://192.168.1.2:5000/api/customer/";
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJBcHBGcm9udGVuZCJ9.53oano-2uC7HBOwHz-BKj3Gu8XmomtJEbuQ_Bpwrp1Q";
    private header = {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    };

    constructor(
        private httpClient: HttpClient
    ){}

    GetCustomers(){
        return this.httpClient.get(this.BASE_URL + "getcustomers", this.header)
                    .toPromise()
                    .then(res => res as Customer[])
    }

    GetCustomerByID(id: string){
        return this.httpClient.get(this.BASE_URL + "getcustomer/" + id, this.header)
                    .toPromise()
                    .then(res => res as Customer)
    }

    CreateCustomer(customer: Customer){
        return this.httpClient.post(this.BASE_URL + "createcustomer", customer, this.header)
                    .toPromise()
                    .then(res => res as Customer)
    }

    DeleteCustomerByID(id: string){
        return this.httpClient.delete(this.BASE_URL + "deletecustomer/" + id, this.header)
                    .toPromise()
                    .then(res => res as Customer)
    }

    UpdateCustomer(customer: Customer){
        return this.httpClient.put(this.BASE_URL + "updatecustomer", customer, this.header)
                    .toPromise()
                    .then(res => res as Customer)
    }
}