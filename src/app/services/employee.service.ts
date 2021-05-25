import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService{

    private BASE_URL: string = "http://192.168.1.2:5000/api/employee/";
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJBcHBGcm9udGVuZCJ9.53oano-2uC7HBOwHz-BKj3Gu8XmomtJEbuQ_Bpwrp1Q";
    private header = {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    };

    constructor(
        private httpClient: HttpClient
    ){}

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