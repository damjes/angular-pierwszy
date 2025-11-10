import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Formularzowy } from './formularzowy'

describe('Formularzowy', () => {
	let component: Formularzowy
	let fixture: ComponentFixture<Formularzowy>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Formularzowy],
		}).compileComponents()

		fixture = TestBed.createComponent(Formularzowy)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
