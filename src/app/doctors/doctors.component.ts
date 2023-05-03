import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent implements OnInit{
  doctors : string[] | undefined; //un tableau de chînes de caractères
  
  constructor(){
    this.doctors=["Koussay Rachidi","Youssef khriti","Rayen Troudi","Hamed triki"];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
