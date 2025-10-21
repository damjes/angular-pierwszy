import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opis1802 } from './opis1802';

describe('Opis1802', () => {
  let component: Opis1802;
  let fixture: ComponentFixture<Opis1802>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opis1802]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opis1802);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
