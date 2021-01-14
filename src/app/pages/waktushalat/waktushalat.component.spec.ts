import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaktushalatComponent } from './waktushalat.component';

describe('WaktushalatComponent', () => {
  let component: WaktushalatComponent;
  let fixture: ComponentFixture<WaktushalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaktushalatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaktushalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
