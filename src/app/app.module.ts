import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { FormsModule } from '@angular/forms';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    AddDoctorComponent,
    UpdateDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }