import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors : Doctor[]; //un tableau de doctor

  constructor() {
    console.log("creation doctor");
    this.doctors=[
      {idDoctor:1,nameDoctor:"Rayen Troudi",ageDoctor:27,serviceDoctor:"pédiatre", dateDoctor: new Date("04/27/2023")},
      {idDoctor:2,nameDoctor:"Youssef khriti",ageDoctor:34,serviceDoctor:"psychologue", dateDoctor: new Date("04/20/2023")},
      {idDoctor:3,nameDoctor:"Koussay Rachidi",ageDoctor:27,serviceDoctor:"chirurgien", dateDoctor: new Date("01/27/2023")},
    ];
   }

  listeDoctors():Doctor[] {
    return this.doctors;
  }

  ajouterDoctor(doctor: Doctor){
  
    this.doctors.push(doctor);
  }
}
