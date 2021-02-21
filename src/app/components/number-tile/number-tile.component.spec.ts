import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTileComponent } from './number-tile.component';

describe('NumberTileComponent', () => {
  let component: NumberTileComponent;
  let fixture: ComponentFixture<NumberTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
