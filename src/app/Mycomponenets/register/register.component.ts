import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      Uname:['',Validators.required],
      password:['',Validators.required],

      
    })
  }
registerSubmit(data:any){
console.log(data);
}
goToTeacher(){
  this.router.navigate(['teacher'])
}
}
