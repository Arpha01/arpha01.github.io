import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPortofolioComponent } from './card-portofolio.component';

describe('CardPortofolioComponent', () => {
  let component: CardPortofolioComponent;
  let fixture: ComponentFixture<CardPortofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPortofolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
