import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard:any= FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.dashboard = this.fb.group({
      Suname:['',Validators.required],
      Spassword:['',Validators.required]
    })
  }
dashboardSubmit(data:any){
  console.log(data);
}
goToStudent(){
  this.router.navigate
}

}