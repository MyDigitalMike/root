import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementacionmComponent } from './implementacionm.component';

describe('ImplementacionmComponent', () => {
  let component: ImplementacionmComponent;
  let fixture: ComponentFixture<ImplementacionmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementacionmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementacionmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
