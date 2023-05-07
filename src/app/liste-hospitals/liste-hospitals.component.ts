import { Component, OnInit } from '@angular/core';
import { Hospital } from '../model/hospital.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-liste-hospitals',
  templateUrl: './liste-hospitals.component.html',
})

export class ListeHospitalsComponent implements OnInit{
  hospitals! : Hospital[];
  updatedHosp:Hospital = {"idHospital":0,"nameHospital":"","adresseHospital":""};
  ajout:boolean=true;

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
  this.doctorService.listeHospitals().subscribe(hosps=>{
    this.hospitals=hosps._embedded.hospitals;
    console.log(hosps);
  });
  }

  chargerHospitals(){
    this.doctorService.listeHospitals().subscribe(hosps => {this.hospitals = hosps._embedded.hospitals;
      console.log(hosps);
    });
  }
  
  hospitalUpdated(hosp :Hospital){
    console.log("Hospital updated event"+hosp);
    this.doctorService.ajouterHospital(hosp).subscribe(()=>this.chargerHospitals());
  }

  updateHospital(hosp:Hospital){
    this.updatedHosp=hosp;
    this.ajout=false;
  }
}
