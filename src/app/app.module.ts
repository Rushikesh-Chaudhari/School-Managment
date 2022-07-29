import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsComponent } from './Mycomponenets/logins/logins.component';
import { RegisterComponent } from './Mycomponenets/register/register.component';
import { DashboardComponent } from './Mycomponenets/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentViewComponent } from './Mycomponenets/student-view/student-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginsComponent,
    RegisterComponent,
    DashboardComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
