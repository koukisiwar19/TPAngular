import { Cv } from './../model/cv';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [
    new Cv(1, 'Kouki', 'Siwar', 'Student', 'pp.jpg', 14563894, 23),
    new Cv(2, 'Sellouati', 'Aymen', 'Teacher', 'monsieur.jpg', 1178963, 22),
  ];

  constructor() {

   }

   getCvs(): Cv[] {
    return this.cvs;
  }

  deleteCv(cv: any): void {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);

  }

  getCvById(i: number): Cv {

   const cv: any = this.cvs.find( (cv) => cv.id == i);


    return cv;
  }











}
