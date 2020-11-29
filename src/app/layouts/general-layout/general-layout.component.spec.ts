import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralLayoutComponent } from './general-layout.component';

describe('GeneralLayoutComponent', () => {
  let component: GeneralLayoutComponent;
  let fixture: ComponentFixture<GeneralLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
