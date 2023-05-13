import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { Hospital } from '../model/hospital.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLHos } from '../config';
import { HospitalWrapper } from '../model/HospitalWrapped';
import { Image } from '../model/image.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
})
};
  
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors! : Doctor[]; //un tableau de doctor
  //hospitals:Hospital[];

  constructor(private http : HttpClient,private authService :AuthService) {
    
   }

  listeDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(apiURL+"/all");
  }
 
  
  ajouterDoctor(doctor: Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(apiURL+"/add_doc",doctor);  
  }


  supprimerDoctor(id: number){
    const url=`${apiURL}/deldoc/${id}`;
    return this.http.delete(url);
  }
  

  consulterDoctor(id:number): Observable<Doctor>{
    const url = `${apiURL}/getbyid/${id}`;
    return this.http.get<Doctor>(url);
  }
 

  updateDoctor(doctor:Doctor){
    return this.http.put<Doctor>(apiURL+"/updatedoc",doctor);
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

  listeHospitals():Observable<HospitalWrapper> {
    return this.http.get<HospitalWrapper>(apiURLHos);
  }


  rechercherParHospital(IdHospital: number):Observable<Doctor[]> {
    const url = `${apiURL}/doctHos/${IdHospital}`;
    return this.http.get<Doctor[]>(url);
  }

  rechercherParName(nom: string):Observable<Doctor[]> {
    const url = `${apiURL}/docsByName/${nom}`;
    return this.http.get<Doctor[]>(url);
  }

  
  ajouterHospital(hosp: Hospital):Observable<Hospital>{
    return this.http.post<Hospital>(apiURLHos,hosp);
  }

  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
  }

  loadImage(id: number): Observable<Image> {
    const url = `${apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }

  uploadImageDoc(file: File, filename: string, idDoc:number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${apiURL + '/image/uplaodImageDoc'}/${idDoc}`;
    return this.http.post(url, imageFormData);
  }

  supprimerImage(id : number) {
    const url = `${apiURL}/image/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }

  uploadImageFS(file: File, filename: string, idDoc : number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${apiURL + '/image/uploadFS'}/${idDoc}`;
    return this.http.post(url, imageFormData);
  }
}
