import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanroqueComponent } from './sanroque.component';

describe('SanroqueComponent', () => {
  let component: SanroqueComponent;
  let fixture: ComponentFixture<SanroqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanroqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanroqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
