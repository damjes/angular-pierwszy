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
  kolorTlaNaglowka: string = 'lightgray';
  wielokrotnieKlikniete: boolean = false;

  zwieksz() {
    this.ileRazy++;
    if (this.ileRazy > 5) {
      this.wielokrotnieKlikniete = true;
    }
  }

  zmienKolorNaglowka() {
    this.kolorTlaNaglowka = this.kolorTlaNaglowka === 'lightgray' ? 'palegreen' : 'lightgray';
  }

  resetuj() {
    this.imie = 'Damjes';
    this.ileRazy = 0;
    this.kolorTla = 'white';
    this.wielokrotnieKlikniete = false;
  }
}
