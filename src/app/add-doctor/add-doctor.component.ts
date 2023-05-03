import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent implements OnInit{
  newDoctor= new Doctor();
  message!:string;
  constructor(private doctorService:DoctorService){

  }

  ngOnInit(): void {
  }

  addDoctor(){
    //console.log(this.newDoctor);
    this.doctorService.ajouterDoctor(this.newDoctor);
    this.message="Doctor "+this.newDoctor.nameDoctor+" added with succefully";
  }
    
}
