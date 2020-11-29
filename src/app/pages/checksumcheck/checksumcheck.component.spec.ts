import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChecksumcheckComponent } from './checksumcheck.component';

describe('ChecksumcheckComponent', () => {
  let component: ChecksumcheckComponent;
  let fixture: ComponentFixture<ChecksumcheckComponent>;

  beforeEach(waitForAsync(() => {
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
