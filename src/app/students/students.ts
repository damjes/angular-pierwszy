import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

export type Student = {
  imie: string;
  wiek: number;
};

@Component({
  selector: 'app-students',
  imports: [NgIf, NgFor],
  templateUrl: './students.html',
  styleUrl: './students.sass',
})
export class Students {
  studenci1: Student[] = [
    { imie: 'Jan', wiek: 21 },
    { imie: 'Paweł', wiek: 37 },
    { imie: 'Drugi', wiek: 2137 },
  ];

  studenci: Student[] = this.studenci1;

  czyStudenci: boolean = true;

  toggleCzyStudenci() {
    this.czyStudenci = !this.czyStudenci;
    this.studenci = this.czyStudenci ? this.studenci1 : [];
  }

  widac: boolean = true;

  przelaczWidocznosc() {
    this.widac = !this.widac;
  }
}
