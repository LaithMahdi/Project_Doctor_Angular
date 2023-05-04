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
    //this.hospitals=this.doctorService.listeHospitals();
  }
  
  addDoctor(){
    //this.newHospital=this.doctorService.consulterHospital(this.newIdHos);
    // this.newDoctor.hospital=this.newHospital;
    // this.doctorService.ajouterDoctor(this.newDoctor);
    // this.router.navigate(['doctors']);
    this.doctorService.ajouterDoctor(this.newDoctor).subscribe(doctor=>{
      console.log(doctor);
      this.router.navigate(['doctors']);
    });
  }
    
}
