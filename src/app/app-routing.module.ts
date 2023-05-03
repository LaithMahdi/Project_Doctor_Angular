import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

const routes: Routes = [
  {path: "doctors", component : DoctorsComponent},
  {path:"add-doctor",component:AddDoctorComponent},
  {path: "", redirectTo: "doctors", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
