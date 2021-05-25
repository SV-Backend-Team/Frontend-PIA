import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { ConfigurationComponent } from '../configuration/configuration.component';
import { Customer } from '../entities/customer.entity';
import { ConfigService } from './config.service';

@Injectable()
export class CustomerService{

    constructor(
        private configService: ConfigService,
        private httpClient: HttpClient
    ) { }
    
    private BASE_URL: string = "http://" +
        this.configService.getURL() + ":" +
        this.configService.getPort() + "/api/customer/";
    
    private token = this.configService.getToken();
    private header = {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    };

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