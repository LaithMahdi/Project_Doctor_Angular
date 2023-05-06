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
    this.doctorService.listeHospitals().subscribe(hosps => {this.hospitals = hosps._embedded.hospitals;
    console.log(hosps);
    });
    this.doctorService.consulterDoctor(this.activatedRoute.snapshot.params['id']).subscribe( 
      doc =>{ this.currentDoctor = doc;
        this.updateHosId=this.currentDoctor.hospital.idHospital;
    }) ;
    console.log("ID HOS "+this.updateHosId);
  }

  updateDoctor()
  { 
    this.currentDoctor.hospital = this.hospitals.find(hos => hos.idHospital == this.updateHosId)!;
    this.doctorService.updateDoctor(this.currentDoctor).subscribe(doc => {
      this.router.navigate(['doctors']);
    }
  );
  }

}
