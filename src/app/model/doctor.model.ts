import { Hospital } from "./hospital.model";
import { Image } from "./image.model";

export class Doctor{
    idDoctor!:number;
    nameDoctor!:string;
    ageDoctor! : number;
    serviceDoctor!:string;
    dateDoctor! : Date ;
    hospital!:Hospital;
    image! : Image;
    imageStr!:string;
    images!: Image[];
}