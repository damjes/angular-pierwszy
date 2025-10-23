import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularzowy',
  imports: [FormsModule],
  templateUrl: './formularzowy.html',
  styleUrl: './formularzowy.sass',
})
export class Formularzowy {
  imie: string = 'Damjes';
}
