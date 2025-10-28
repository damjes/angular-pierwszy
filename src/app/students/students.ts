import { Component } from '@angular/core';

export type Student = {
  imię: string;
  wiek: number;
};

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.sass',
})
export class Students {
  studenci: Student[] = [
    { imię: 'Jan', wiek: 21 },
    { imię: 'Paweł', wiek: 37 },
    { imię: 'Drugi', wiek: 2137 },
  ];

  widać: boolean = true;

  przełączWidoczność() {
    this.widać = !this.widać;
  }
}
