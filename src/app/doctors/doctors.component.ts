import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent implements OnInit {
  doctors?: Doctor[];
  apiurl: string = 'http://localhost:8080/doctors/api';

  constructor(
    private doctorService: DoctorService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.chargerDoctors();
  }

  // 

  chargerDoctors(){
    this.doctorService.listeDoctors().subscribe(docs => {
    this.doctors = docs;
    this.doctors.forEach((doc) => {
    doc.imageStr = 'data:' + doc.images[0].type + ';base64,' +
    doc.images[0].image;
    });
    });
    }
  supprimerDoctor(d: Doctor) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.doctorService.supprimerDoctor(d.idDoctor).subscribe(() => {
        console.log('doctor deleted');
        this.chargerDoctors();
      });
  }
}
