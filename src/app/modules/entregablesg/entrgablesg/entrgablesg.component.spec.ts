import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrgablesgComponent } from './entrgablesg.component';

describe('EntrgablesgComponent', () => {
  let component: EntrgablesgComponent;
  let fixture: ComponentFixture<EntrgablesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrgablesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrgablesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
