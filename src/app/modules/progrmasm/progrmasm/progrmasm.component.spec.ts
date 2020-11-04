import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrmasmComponent } from './progrmasm.component';

describe('ProgrmasmComponent', () => {
  let component: ProgrmasmComponent;
  let fixture: ComponentFixture<ProgrmasmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrmasmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrmasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
