import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaTComponent } from './linea-t.component';

describe('LineaTComponent', () => {
  let component: LineaTComponent;
  let fixture: ComponentFixture<LineaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
