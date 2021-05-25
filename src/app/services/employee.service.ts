import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Employee } from '../entities/employee.entity';
import { ConfigService } from './config.service';

@Injectable()
export class EmployeeService{
    
    constructor(
        private configService: ConfigService,
        private httpClient: HttpClient
    ) { }
    
    private BASE_URL: string = "http://" +
        this.configService.getURL() + ":" +
        this.configService.getPort() + "/api/employee/";
    
    private token = this.configService.getToken();
    private header = {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    };

    GetEmployees(){
        return this.httpClient.get(this.BASE_URL + "getemployees", this.header)
                    .toPromise()
                    .then(res => res as Employee[])
    }

    GetEmployeeByID(id: number){
        return this.httpClient.get(this.BASE_URL + "getemployee/" + id, this.header)
                    .toPromise()
                    .then(res => res as Employee)
    }

    CreateEmployee(employee: Employee){
        return this.httpClient.post(this.BASE_URL + "createemployee", employee, this.header)
                    .toPromise()
                    .then(res => res as Employee)
    }

    DeleteEmployeeByID(id: number){
        return this.httpClient.delete(this.BASE_URL + "deleteemployee/" + id, this.header)
                    .toPromise()
                    .then(res => res as Employee)
    }

    UpdateEmployee(employee: Employee){
        return this.httpClient.put(this.BASE_URL + "updateemployee", employee, this.header)
                    .toPromise()
                    .then(res => res as Employee)
    }
}