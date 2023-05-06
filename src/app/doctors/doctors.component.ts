import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent implements OnInit{
  doctors? : Doctor[]; 

  constructor(private doctorService:DoctorService){
    //this.doctors=[];
  }

  ngOnInit(): void {
    this.chargerDoctors(); 
  }
  chargerDoctors(){
    // this.produitService.listeProduit().subscribe(prods => {
    // console.log(prods);
    // this.produits = prods;
    // });
    this.doctorService.listeDoctors().subscribe(docs=>{
      console.log(docs);
      this.doctors=docs;
    });
    }

  supprimerDoctor(d: Doctor)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  /*this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
  console.log("produit supprimé");
  this.chargerProduits();
  });*/
  this.doctorService.supprimerDoctor(d.idDoctor).subscribe(()=>{
    console.log("doctor deleted");
    this.chargerDoctors();
  });
  }
  

}
