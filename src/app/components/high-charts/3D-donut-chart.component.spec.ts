import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donut3DChartComponent } from './3D-donut-chart.component';

describe('Donut3DChartComponent', () => {
  let component: Donut3DChartComponent;
  let fixture: ComponentFixture<Donut3DChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Donut3DChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Donut3DChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
