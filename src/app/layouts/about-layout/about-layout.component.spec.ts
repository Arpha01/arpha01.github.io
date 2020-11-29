import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutLayoutComponent } from './about-layout.component';

describe('AboutLayoutComponent', () => {
  let component: AboutLayoutComponent;
  let fixture: ComponentFixture<AboutLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
