import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obrazek1802 } from './obrazek1802';

describe('Obrazek1802', () => {
  let component: Obrazek1802;
  let fixture: ComponentFixture<Obrazek1802>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obrazek1802]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obrazek1802);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
