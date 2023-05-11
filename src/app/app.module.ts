import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { FormsModule } from '@angular/forms';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParHospitalComponent } from './recherche-par-hospital/recherche-par-hospital.component';
import { RechercheParNameComponent } from './recherche-par-name/recherche-par-name.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeHospitalsComponent } from './liste-hospitals/liste-hospitals.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    RechercheParHospitalComponent,
    RechercheParNameComponent,
    SearchFilterPipe,
    ListeHospitalsComponent,
    UpdateHospitalComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
