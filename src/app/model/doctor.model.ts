import { Hospital } from "./hospital.model";

export class Doctor{
    idDoctor!:number;
    nameDoctor!:string;
    ageDoctor! : number;
    serviceDoctor!:string;
    dateDoctor! : Date ;
    hospital!:Hospital;
}