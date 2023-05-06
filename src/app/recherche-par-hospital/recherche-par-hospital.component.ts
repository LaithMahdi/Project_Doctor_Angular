import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { Hospital } from '../model/hospital.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-recherche-par-hospital',
  templateUrl: './recherche-par-hospital.component.html',
})
export class RechercheParHospitalComponent implements OnInit{
  IdHos!:number;
  doctors!:Doctor[];
  hospitals!:Hospital[];

  constructor(private doctorService:DoctorService){}

  ngOnInit(): void {
    this.doctorService.listeHospitals().subscribe(hosps=>{
      this.hospitals=hosps._embedded.hospitals;
      console.log("hospital"+hosps);
    });  
  }

  onChange(){
    this.doctorService.rechercherParHospital(this.IdHos).subscribe(docs=>{
      this.doctors=docs;
    });
    console.log("Doctor :"+this.doctors);
  }
}
