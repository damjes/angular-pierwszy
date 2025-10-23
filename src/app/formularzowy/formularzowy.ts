import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularzowy',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './formularzowy.html',
  styleUrl: './formularzowy.sass',
})
export class Formularzowy {
  imie: string = 'Damjes';
  ileRazy: number = 0;
  kolorTla: string = 'white';
  wielokrotnieKlikniete: boolean = false;

  zwieksz() {
    this.ileRazy++;
    if (this.ileRazy > 5) {
      this.wielokrotnieKlikniete = true;
    }
  }

  zmienKolor() {
    this.kolorTla = this.kolorTla === 'white' ? 'lightblue' : 'white';
  }
}
