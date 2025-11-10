import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
	selector: 'app-kliker',
	imports: [],
	templateUrl: './kliker.html',
	styleUrl: './kliker.sass',
})
export class Kliker {
	@Output() zwieksz = new EventEmitter<number>()
	@Input() ileRazy: number = 0

	kliknieto() {
		this.zwieksz.emit(1)
	}
}
