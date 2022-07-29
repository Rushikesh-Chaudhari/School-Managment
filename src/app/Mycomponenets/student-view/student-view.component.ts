import { Component, OnInit } from '@angular/core';
import { HttpClientService , Student } from 'src/app/service/http-clint.service';

import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  
  stdDetail !: FormGroup;
  stdObj: Student = new Student();
  stdList: Student[] = [];

  constructor(private formBuilder:FormBuilder,private httpClintServise : HttpClientService) { }

  ngOnInit(): void {
    this.getAllStudent();

    this.stdDetail = this.formBuilder.group({
      id: [''],
      username: [''],
      password :[''],
      fname:[''],
      mname:[''],
      sname:[''],
      add: [''],
      email: ['']
    });

  }

  addStudent() {
    console.log(this.stdDetail);
    this.stdObj.username = this.stdDetail.value.username;
    this.stdObj.password = this.stdDetail.value.password;
    this.stdObj.id = this.stdDetail.value.id;
    this.stdObj.fname = this.stdDetail.value.fname;
    this.stdObj.mname = this.stdDetail.value.mname;
    this.stdObj.sname = this.stdDetail.value.sname;
    this.stdObj.add = this.stdDetail.value.add;
    this.stdObj.email = this.stdDetail.value.email;


    this.addStudent(this.stdObj).subscribe(res => {
      console.log(res);
      this.getAllEmployee();
    }, err => {
      console.log(err);
    });

  }

  getAllEmployee() {
    this.http-clint.service.getAllEmployee().subscribe(res => {
      this.empList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }

  editEmployee(emp: Employee) {
    this.empDetail.controls['Username'].setValue(emp.Username);
    this.empDetail.controls['Password'].setValue(emp.Password);
    this.empDetail.controls['Id'].setValue(emp.Id);
    this.empDetail.controls['Firstname'].setValue(emp.Firstname);
    this.empDetail.controls['Middlename'].setValue(emp.Middlename);
    this.empDetail.controls['Lastname'].setValue(emp.Lastname);
    this.empDetail.controls['Address'].setValue(emp.Address);
    this.empDetail.controls['Email'].setValue(emp.Email);

  }

  updateEmployee() {

    this.empObj.Username = this.empDetail.value.id;
    this.empObj.Password = this.empDetail.value.name;
    this.empObj.Id = this.empDetail.value.salary;
    this.empObj.Firstname = this.empDetail.value.email;
    this.empObj.Middlename= this.empDetail.value.id;
    this.empObj.Lastname = this.empDetail.value.name;
    this.empObj.Address = this.empDetail.value.salary;
    this.empObj.Email = this.empDetail.value.email;

    this.empService.updateEmployee(this.empObj).subscribe(res => {
      console.log(res);
      this.getAllEmployee();
    }, err => {
      console.log(err);
    })

  }

  deleteEmployee(emp: Employee) {

    this.empService.deleteEmployee(emp).subscribe(res => {
      console.log(res);
      alert('Employee deleted successfully');
      this.getAllEmployee();
    }, err => {
      console.log(err);
    });
  }

  handleSuccessfulResponce(response: Student[]){
    this.students =response;
  }

}
