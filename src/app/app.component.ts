import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: Employee[];
  employeeID: number = undefined;
  employee: Employee;
  employeeForm: FormGroup

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.employeeService.findall().then(
      res => {
        this.employees = res;
      },
      error => {
        console.log(error);
      }
    );

    this.employee = {
      EmployeeID: 0,
      LastName: '',
      FirstName: '',
      Title: '',
      TitleOfCourtesy: '',
      BirthDate: '',
      HireDate: '',
      Address: '',
      City: '',
      Region: '',
      PostalCode: '',
      Country: '',
      HomePhone: '',
      Extension: '',
      Notes: '',
      ReportsTo: '',
      PhotoPath: ''
    }

    this.employeeForm = this.formBuilder.group({
      LastName: '',
      FirstName: '',
      /*Title: 'Maneger',
      TitleOfCourtesy: 'Dr.',
      BirthDate: null,
      HireDate: null,
      Address: '991 Hello Kitty Street',
      City: 'Mexico',
      Region: 'Mexico',
      PostalCode: '99999',
      Country: 'MX',
      HomePhone: '911',
      Extension: null,
      Notes: null,
      PhotoPath: null*/
    });
  }

  search() {
    this.employeeService.find(this.employeeID).then(
      res => {
        this.employee = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  save() {
    var employee: Employee = this.employeeForm.value;
    console.log(employee);
    this.employeeService.create(employee).then(
      res => {
        this.employee = res;
      },
      error => {
        console.log(error);
      }
    )
  }

  delete() {
    this.employeeService.delete(this.employeeID).then(
      res => {
        this.employee = res;
      },
      error => {
        console.log(error);
      }
    );
  }

}