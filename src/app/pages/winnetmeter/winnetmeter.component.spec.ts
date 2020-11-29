import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WinnetmeterComponent } from './winnetmeter.component';

describe('WinnetmeterComponent', () => {
  let component: WinnetmeterComponent;
  let fixture: ComponentFixture<WinnetmeterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnetmeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnetmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
