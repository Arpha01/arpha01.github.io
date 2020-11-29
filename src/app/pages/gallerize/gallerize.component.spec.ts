import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GallerizeComponent } from './gallerize.component';

describe('GallerizeComponent', () => {
  let component: GallerizeComponent;
  let fixture: ComponentFixture<GallerizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
