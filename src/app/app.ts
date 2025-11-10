import { Component, signal } from '@angular/core';
import { Wlasny } from './wlasny/wlasny';
import { Pudelko } from './pudelko/pudelko';
import { Formularzowy } from './formularzowy/formularzowy';
import { Students } from './students/students';

@Component({
	selector: 'app-root',
	imports: [Wlasny, Pudelko, Formularzowy, Students],
	templateUrl: './app.html',
	styleUrl: './app.sass',
})
export class App {
	protected readonly title = signal('pierwszy');
}
