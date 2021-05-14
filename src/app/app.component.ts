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
  @Input() employeeID_sel: number = undefined;
  @Input() employeeID_del: number = undefined;
  @Input() created_succesfully: number = 0;
  @Input() deleted_succesfully: number = 0;
  @Input() employee: Employee = null;
  @Input() employeeForm: FormGroup

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchemployees()

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
  
  searchemployees() {
    this.employeeService.GetEmployees().then(
      res => {
        this.employees = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  searchemployee() {
    this.employeeService.GetEmployeeByID(this.employeeID_sel).then(
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
        this.created_succesfully = 1;
        this.searchemployees()
      },
      error => {
        this.created_succesfully = -1;
        console.log(error);
      }
    )
  }

  deleteemployee() {
    this.employeeService.DeleteEmployeeByID(this.employeeID_del).then(
      res => {
        this.deleted_succesfully = 1
        this.searchemployees()
      },
      error => {
        this.deleted_succesfully = -1
        console.log(error);
      }
    );
  }

}