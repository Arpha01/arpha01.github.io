import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnetmeterComponent } from './winnetmeter.component';

describe('WinnetmeterComponent', () => {
  let component: WinnetmeterComponent;
  let fixture: ComponentFixture<WinnetmeterComponent>;

  beforeEach(async(() => {
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
