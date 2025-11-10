import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Wlasny } from './wlasny'

describe('Wlasny', () => {
	let component: Wlasny
	let fixture: ComponentFixture<Wlasny>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Wlasny],
		}).compileComponents()

		fixture = TestBed.createComponent(Wlasny)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
