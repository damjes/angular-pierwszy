import { Component } from '@angular/core';
import { Obrazek1802 } from '../obrazek1802/obrazek1802';
import { Opis1802 } from '../opis1802/opis1802';

@Component({
	selector: 'app-pudelko',
	imports: [Obrazek1802, Opis1802],
	templateUrl: './pudelko.html',
	styleUrl: './pudelko.sass',
})
export class Pudelko {}
