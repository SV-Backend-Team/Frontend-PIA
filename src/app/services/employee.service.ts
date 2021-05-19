import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService{

    private BASE_URL: string = "http://localhost:5000/api/employee/";
    constructor(
        private httpClient: HttpClient
    ){}

    GetEmployees(){
        return this.httpClient.get(this.BASE_URL + "getemployees")
                    .toPromise()
                    .then(res => res as Employee[])
    }

    GetEmployeeByID(id: number){
        return this.httpClient.get(this.BASE_URL + "getemployee/" + id)
                    .toPromise()
                    .then(res => res as Employee)
    }

    CreateEmployee(employee: Employee){
        return this.httpClient.post(this.BASE_URL + "createemployee", employee)
                    .toPromise()
                    .then(res => res as Employee)
    }

    DeleteEmployeeByID(id: number){
        return this.httpClient.delete(this.BASE_URL + "deleteemployee/" + id)
                    .toPromise()
                    .then(res => res as Employee)
    }

    UpdateEmployee(employee: Employee){
        return this.httpClient.put(this.BASE_URL + "updateemployee", employee)
                    .toPromise()
                    .then(res => res as Employee)
    }
}