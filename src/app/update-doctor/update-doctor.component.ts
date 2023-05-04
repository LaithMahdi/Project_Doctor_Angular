import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';
import { Hospital } from '../model/hospital.model';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
})
export class UpdateDoctorComponent implements OnInit{
  currentDoctor = new Doctor();
 
  hospitals!:Hospital[];
  updateHosId!:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private doctorService: DoctorService
    ){}

  ngOnInit(): void {
    //this.hospitals=this.doctorService.listeHospitals();
    this.currentDoctor=this.doctorService.consulterDoctor(this.activatedRoute.snapshot.params["id"]);
    this.updateHosId=this.currentDoctor.hospital.idHospital;
  }

  updateDoctor()
  { 
    //this.currentDoctor.hospital=this.doctorService.consulterHospital(this.updateHosId);
    this.doctorService.updateDoctor(this.currentDoctor);
    this.router.navigate(['doctors']);
  }

}
