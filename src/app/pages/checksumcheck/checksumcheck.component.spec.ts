import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksumcheckComponent } from './checksumcheck.component';

describe('ChecksumcheckComponent', () => {
  let component: ChecksumcheckComponent;
  let fixture: ComponentFixture<ChecksumcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksumcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksumcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
