import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-recherche-par-name',
  templateUrl: './recherche-par-name.component.html',
})
export class RechercheParNameComponent implements OnInit{
  nomDoctor! : string;
  doctors!: Doctor[];
  allDoctors! : Doctor[];
  searchTerm!: string;

  ngOnInit(): void {
    this.doctorService.listeDoctors().subscribe(docs=>{
      console.log(docs);
      // on a utilise pipe filte
      //this.allDoctors=docs;
      this.doctors=docs;
    });
  }

  constructor(private doctorService:DoctorService){}
  // rechercherProds(){
  //   this.doctorService.rechercherParName(this.nomDoctor).subscribe(docs=>{
  //     this.doctors=docs;
  //     console.log(docs);
  //   });
  // }
  /*onKeyUp(filterText : string){
    this.doctors = this.allDoctors.filter(item =>
      item.nameDoctor.toLowerCase().includes(filterText));
    }*/
}
