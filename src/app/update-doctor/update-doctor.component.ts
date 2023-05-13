import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';
import { Hospital } from '../model/hospital.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
})
export class UpdateDoctorComponent implements OnInit {
  currentDoctor = new Doctor();
  myImage!: string;
  hospitals!: Hospital[];
  updateHosId!: number;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.doctorService.listeHospitals().subscribe((hosps) => {
      this.hospitals = hosps._embedded.hospitals;
    });
    this.doctorService
      .consulterDoctor(this.activatedRoute.snapshot.params['id'])
      .subscribe((doc) => {
        this.currentDoctor = doc;
        this.updateHosId = doc.hospital.idHospital;
      });
  }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }

  updateDoctor() {
    this.currentDoctor.hospital = this.hospitals.find(
      (hosp) => hosp.idHospital == this.updateHosId
    )!;
    this.doctorService.updateDoctor(this.currentDoctor).subscribe((doc) => {
      this.router.navigate(['doctors']);
    });
  }
  onAddImageDoctor() {
    this.doctorService
      .uploadImageDoc(
        this.uploadedImage,
        this.uploadedImage.name,
        this.currentDoctor.idDoctor
      )
      .subscribe((img: Image) => {
        this.currentDoctor.images.push(img);
      });
  }

  supprimerImage(img: Image) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.doctorService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentDoctor.images.indexOf(img, 0);
        if (index > -1) {
          this.currentDoctor.images.splice(index, 1);
        }
      });
  }
}
