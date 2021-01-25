import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbtexamComponent } from './cbtexam.component';

describe('CbtexamComponent', () => {
  let component: CbtexamComponent;
  let fixture: ComponentFixture<CbtexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbtexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbtexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
