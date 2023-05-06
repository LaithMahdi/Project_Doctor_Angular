import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { DoctorService } from '../services/doctor.service';
import { Hospital } from '../model/hospital.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent implements OnInit{
  newDoctor= new Doctor();
  hospitals! : Hospital[];
  newHospital! : Hospital;
  newIdHos!:number;
  constructor(private doctorService:DoctorService,private router :Router){

  }

  ngOnInit(): void {
    this.doctorService.listeHospitals().subscribe(hops=>{
      this.hospitals=hops._embedded.hospitals;
      console.log(hops);
    });
  }
  
  addDoctor(){
    this.newDoctor.hospital=this.hospitals.find(hos=>hos.idHospital==this.newIdHos)!;
    this.doctorService.ajouterDoctor(this.newDoctor).subscribe(doc=>{
      console.log(doc);
      this.router.navigate(['doctors']);
    });
  }
    
}
