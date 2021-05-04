import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService{

    private BASE_URL: string = "http://localhost:5000/api/employee/";
    constructor(
        private httpClient: HttpClient
    ){}

    findall(){
        return this.httpClient.get(this.BASE_URL + "findall")
                    .toPromise()
                    .then(res => res as Employee[])
    }

    find(id: number){
        return this.httpClient.get(this.BASE_URL + "search/" + id)
                    .toPromise()
                    .then(res => res as Employee)
    }

    create(employee: Employee){
        return this.httpClient.post(this.BASE_URL + "create", employee)
                    .toPromise()
                    .then(res => res as Employee)
    }

    delete(id: number){
        return this.httpClient.delete(this.BASE_URL + "delete/" + id)
                    .toPromise()
                    .then(res => res as Employee)
    }
}