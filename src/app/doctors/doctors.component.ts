import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent implements OnInit{
  doctors? : Doctor[]; 

  constructor(
    private doctorService:DoctorService,
    public authService: AuthService,
  ){}

  ngOnInit(): void {
    this.chargerDoctors(); 
  }
  chargerDoctors(){
    this.doctorService.listeDoctors().subscribe(docs=>{
      console.log(docs);
      this.doctors=docs;
    });
    }

  supprimerDoctor(d: Doctor)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.doctorService.supprimerDoctor(d.idDoctor).subscribe(()=>{
    console.log("doctor deleted");
    this.chargerDoctors();
  });
  }
  

}
