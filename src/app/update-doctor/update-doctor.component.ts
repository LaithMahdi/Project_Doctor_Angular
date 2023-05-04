import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
})
export class UpdateDoctorComponent implements OnInit{
  currentDoctor = new Doctor();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private doctorService: DoctorService
    ){}

  ngOnInit(): void {
    this.currentDoctor=this.doctorService.consulterDoctor(this.activatedRoute.snapshot.params["id"]);
    console.log(this.currentDoctor);
  }

  updateDoctor()
  { 
    console.log(this.currentDoctor);
    this.doctorService.updateDoctor(this.currentDoctor);
    this.router.navigate(['doctors']);
  }

}
