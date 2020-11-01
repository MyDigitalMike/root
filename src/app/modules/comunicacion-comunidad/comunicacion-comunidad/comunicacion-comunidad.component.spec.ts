import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionComunidadComponent } from './comunicacion-comunidad.component';

describe('ComunicacionComunidadComponent', () => {
  let component: ComunicacionComunidadComponent;
  let fixture: ComponentFixture<ComunicacionComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacionComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
