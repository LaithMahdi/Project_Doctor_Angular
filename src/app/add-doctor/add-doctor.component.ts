import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { DoctorService } from '../services/doctor.service';
import { Hospital } from '../model/hospital.model';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent implements OnInit {
  newDoctor = new Doctor();
  hospitals!: Hospital[];
  newHospital!: Hospital;
  newIdHos!: number;
  uploadedImage!: File;
  imagePath: any;

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.listeHospitals().subscribe((hops) => {
      this.hospitals = hops._embedded.hospitals;
      console.log(hops);
    });
  }


  addDoctor() {
    this.doctorService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        this.newDoctor.image = img;
        this.newDoctor.hospital = this.hospitals.find(hos => hos.idHospital
          == this.newIdHos)!;
        this.doctorService
          .ajouterDoctor(this.newDoctor)
          .subscribe(() => {
            console.log(this.newDoctor);
            this.router.navigate(['doctors']);
          });
      });
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }

}
