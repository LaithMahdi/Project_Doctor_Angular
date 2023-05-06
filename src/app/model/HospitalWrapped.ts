import { Hospital } from "./hospital.model";

export class HospitalWrapper{
    _embedded!: { hospitals: Hospital[]};
}