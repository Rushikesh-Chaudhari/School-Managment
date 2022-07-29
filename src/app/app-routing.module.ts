import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Mycomponenets/dashboard/dashboard.component';
import { LoginsComponent } from './Mycomponenets/logins/logins.component';
import { RegisterComponent } from './Mycomponenets/register/register.component';
import { StudentViewComponent } from './Mycomponenets/student-view/student-view.component';

const routes: Routes = [{path:'login',component:LoginsComponent},{path:'register',component:RegisterComponent},{path:'home',component:DashboardComponent},{path:'teacher',component:StudentViewComponent},
{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
