import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { Hospital } from '../model/hospital.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
  
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiURL: string = 'http://localhost:8080/doctors_demo/api';

  doctors! : Doctor[]; //un tableau de doctor
  //hospitals:Hospital[];

  constructor(private http : HttpClient) {
    // this.hospitals=[
    //   {idHospital:1,nomHospital:"Aziza Othmana",typeHospital:"University hospital",adresseHospital:"Tunis Governorate",dateCreation:new Date()},
    //   {idHospital:2,nomHospital:"Taher Maamouri",typeHospital:"Regional",adresseHospital:"Nabeul Governorate, Mrezga",dateCreation:new Date()},
    // ];
    // this.doctors=[
    //   {idDoctor:1,nameDoctor:"Rayen Troudi",ageDoctor:27,serviceDoctor:"pédiatre", dateDoctor: new Date("04/27/2023"),hospital:{idHospital:1,nomHospital:"Aziza Othmana",typeHospital:"University hospital",adresseHospital:"Tunis Governorate",dateCreation:new Date()},},
    //   {idDoctor:2,nameDoctor:"Youssef khriti",ageDoctor:34,serviceDoctor:"psychologue", dateDoctor: new Date("04/20/2023"),
    //   hospital:{idHospital:2,nomHospital:"Taher Maamouri",typeHospital:"Regional",adresseHospital:"Nabeul Governorate, Mrezga",dateCreation:new Date()},
    // },
    //   {idDoctor:3,nameDoctor:"Koussay Rachidi",ageDoctor:27,serviceDoctor:"chirurgien", dateDoctor: new Date("01/27/2023"),hospital:{idHospital:1,nomHospital:"Aziza Othmana",typeHospital:"University hospital",adresseHospital:"Tunis Governorate",dateCreation:new Date()},},
    // ];
   }

  listeDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiURL);
  }
  
  ajouterDoctor(doctor: Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(this.apiURL, doctor, httpOptions);  
  }

  supprimerDoctor(doctor: Doctor){
    //supprimer le produit prod du tableau produits
    const index = this.doctors.indexOf(doctor, 0);
    if (index > -1) { 
      this.doctors.splice(index,1);
    }
  }

  consulterDoctor(id:number): Doctor{
    return this.doctors.find(d=>d.idDoctor==id)!;
  }

  updateDoctor(doctor:Doctor)
  {
    this.supprimerDoctor(doctor);
    this.ajouterDoctor(doctor);
    this.trierDoctors();
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

  // listeHospitals():Hospital[] {
  //   return this.hospitals;
  // }
  // consulterHospital(id:number): Hospital{
  //   return this.hospitals.find(hos=>hos.idHospital==id)!;
  // }
}
