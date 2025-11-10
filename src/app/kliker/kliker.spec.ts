import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kliker } from './kliker';

describe('Kliker', () => {
	let component: Kliker;
	let fixture: ComponentFixture<Kliker>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Kliker],
		}).compileComponents();

		fixture = TestBed.createComponent(Kliker);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
