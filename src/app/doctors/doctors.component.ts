import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent implements OnInit{
  doctors? : Doctor[]; 

  constructor(private doctorService:DoctorService){
    //this.doctors=[];
  }

  ngOnInit(): void {
    this.doctors=this.doctorService.listeDoctors();
  }

  

}
