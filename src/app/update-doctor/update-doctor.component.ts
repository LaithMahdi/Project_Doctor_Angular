import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';
import { Hospital } from '../model/hospital.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
}) export class UpdateDoctorComponent implements OnInit {

  currentDoctor = new Doctor();
  hospitals!: Hospital[];
  updatedHosId!: number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private dctorService: DoctorService) { }


  ngOnInit(): void {
    this.dctorService.listeHospitals().
      subscribe(hops => {
        this.hospitals = hops._embedded.hospitals;
      });
    this.dctorService.consulterDoctor(this.activatedRoute.snapshot.params['id'])
      .subscribe(doc => {
        this.currentDoctor = doc;
        this.updatedHosId = doc.hospital.idHospital;
      });
  }





  updateDoctor() {
    this.currentDoctor.hospital = this.hospitals.find(hop => hop.idHospital ==
      this.updatedHosId)!;
    this.dctorService
      .updateDoctor(this.currentDoctor)
      .subscribe((doc) => {
        this.router.navigate(['doctors']);
      });
  }



  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }

  onAddImageDoctor() {
    this.dctorService
      .uploadImageDoc(this.uploadedImage, this.uploadedImage.name, this.currentDoctor.idDoctor)
      .subscribe((img: Image) => {
        this.currentDoctor.images.push(img);
      });
  }

  supprimerImage(img: Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.dctorService.supprimerImage(img.idImage).subscribe(() => {
        const index = this.currentDoctor.images.indexOf(img, 0);
        if (index > -1) {
          this.currentDoctor.images.splice(index, 1);
        }
      });
  }
}