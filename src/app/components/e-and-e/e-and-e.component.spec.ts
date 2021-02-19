import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAndEComponent } from './e-and-e.component';

describe('EAndEComponent', () => {
  let component: EAndEComponent;
  let fixture: ComponentFixture<EAndEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAndEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EAndEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
