import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hospital } from '../model/hospital.model';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
})
export class UpdateHospitalComponent implements OnInit{
  
  @Input()
  hospital!:Hospital;
  @Input()
  ajout!:boolean;
  
  @Output()
  hospitalUpdated = new EventEmitter<Hospital>();


  constructor(){}

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.hospital);
  }
  saveHospital(){
    this.hospitalUpdated.emit(this.hospital);
  }
}
