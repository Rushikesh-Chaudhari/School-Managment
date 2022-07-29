import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  login :any =new FormGroup({
    Uname : new FormControl,
    password : new FormControl
  })
  constructor(private fb : FormBuilder, private router:Router) { }

  ngOnInit(): void {
    
    this.login = this.fb.group({
      Uname:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],

    })
  }
  // loginSubmit(data:any){
  //   this.router.navigate(['dashboard'])

  // }
  goToDashboard(){
    this.router.navigate(['home'])

  }
  goToSignup(){
    this.router.navigate(['register'])
  }

}
