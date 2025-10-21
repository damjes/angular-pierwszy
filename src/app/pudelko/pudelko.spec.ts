import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pudelko } from './pudelko';

describe('Pudelko', () => {
  let component: Pudelko;
  let fixture: ComponentFixture<Pudelko>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pudelko]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pudelko);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
