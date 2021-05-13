import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() employees: Employee[];
  @Input() employeeID: number = undefined;
  @Input() employee: Employee;
  @Input() employeeForm: FormGroup

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.employeeService.GetEmployees().then(
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
      Lastname: new FormControl(''),
      Firstname: new FormControl(''),
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

  searchemployee() {
    this.employeeService.GetEmployeeByID(this.employeeID).then(
      res => {
        this.employee = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  saveemployee() {
    var employee: Employee = this.employeeForm.value;
    console.log(employee);
    this.employeeService.CreateEmployee(employee).then(
      res => {
        this.employee = res;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteemployee() {
    this.employeeService.DeleteEmployeeByID(this.employeeID).then(
      res => {
        this.employee = res;
      },
      error => {
        console.log(error);
      }
    );
  }

}