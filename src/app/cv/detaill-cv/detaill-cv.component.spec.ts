import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillCvComponent } from './detaill-cv.component';

describe('DetaillCvComponent', () => {
  let component: DetaillCvComponent;
  let fixture: ComponentFixture<DetaillCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
