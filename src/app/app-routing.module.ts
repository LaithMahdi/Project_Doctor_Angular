import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { RechercheParHospitalComponent } from './recherche-par-hospital/recherche-par-hospital.component';
import { RechercheParNameComponent } from './recherche-par-name/recherche-par-name.component';
import { ListeHospitalsComponent } from './liste-hospitals/liste-hospitals.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DoctorGuard } from './doctor.guard';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: "doctors", component : DoctorsComponent},
  {path:"add-doctor",component:AddDoctorComponent,canActivate:[DoctorGuard]},
  {path: "", redirectTo: "doctors", pathMatch: "full" },
  {path: "updateDoctor/:id", component: UpdateDoctorComponent},
  {path: "rechercheParHospital", component : RechercheParHospitalComponent},
  {path: "rechercheParName", component : RechercheParNameComponent},
  {path: "listeHospitals", component : ListeHospitalsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
