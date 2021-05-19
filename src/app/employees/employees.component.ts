import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { parse } from 'node:path';
import { Employee } from 'src/app/entities/employee.entity';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() employees: Employee[];
  @Input() employeeID_sel: number = undefined;
  @Input() employeeID_del: number = undefined;
  @Input() created_succesfully: number = 0;
  @Input() deleted_succesfully: number = 0;
  @Input() updated_succesfully: number = 0;
  @Input() employee: Employee = null;
  @Input() employeeForm: FormGroup
  @Input() updateEmployeeForm: FormGroup

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
    });

    this.updateEmployeeForm = this.formBuilder.group({
      EmployeeID: new FormControl(0, [Validators.required]),
      Lastname: new FormControl(''),
      Firstname: new FormControl(''),
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

  updateemployee() {
    var employee: Employee = this.updateEmployeeForm.value;
    employee.EmployeeID = parseInt(this.updateEmployeeForm.value.EmployeeID)
    console.log(this.updateEmployeeForm.getRawValue());
    console.log(this.updateEmployeeForm.value);
    console.log( this.updateEmployeeForm.value);

    this.employeeService.UpdateEmployee(employee).then(
      res => {
        this.updated_succesfully = 1;
        this.searchemployees()
      },
      error => {
        this.updated_succesfully = -1;
        console.log(error);
      }
    )
  }
}
