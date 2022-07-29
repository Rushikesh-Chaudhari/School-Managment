import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


export class Student {
  constructor(
    public  username: string,
    public  password: string,
    public  id: number,
    public  firstname: string,
    public  middelename: string,
    public  lastname: string,
    public  add: string,
    public email:string
  ) {
  }
}

// This is a service class
@Injectable({
  providedIn: 'root'
})

export class HttpClientService{

  addstudURL:string;
  getstudURL :string;
  updatestudURL:string;
  deletestudURL:string;

  constructor(private httpClient: HttpClient) { 

    this.addstudURL = 'http://localhost:8080/create';
    this.getstudURL = 'http://localhost:8080/student';
    this.updatestudURL='http://localhost:8080/updatestudent'
    this.deletestudURL='http://localhost:8080/deleteStudentById{id}'
    
  }

  addStudent(std: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.addstudURL, std);
  }

  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.getstudURL);
  }

  updateStudent(std: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.updatestudURL,std);
  }

  deleteStudent(std: Student): Observable<Student> {
    return this.httpClient.delete<Student>(this.deletestudURL + '/' +std.id);
  }
}
