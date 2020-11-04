import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimientosaComponent } from './agradecimientosa.component';

describe('AgradecimientosaComponent', () => {
  let component: AgradecimientosaComponent;
  let fixture: ComponentFixture<AgradecimientosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgradecimientosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimientosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
