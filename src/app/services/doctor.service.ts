import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors : Doctor[]; //un tableau de doctor

  constructor() {
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

  supprimerDoctor(doctor: Doctor){
    //supprimer le produit prod du tableau produits
    const index = this.doctors.indexOf(doctor, 0);
    if (index > -1) {
      this.doctors.splice(index,1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }

  consulterDoctor(id:number): Doctor{
    return this.doctors.find(d=>d.idDoctor==id)!;
  }

  updateDoctor(doctor:Doctor)
  {
    this.supprimerDoctor(doctor);
    this.ajouterDoctor(doctor);
  }


  trierDoctors(){
    this.doctors = this.doctors.sort((n1,n2) => {
      if (n1.idDoctor > n2.idDoctor) {
      return 1;
      }
      if (n1.idDoctor < n2.idDoctor) {
      return -1;
      }
      return 0;
    });  
  }
}
