import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCourseCardComponent } from './selected-course-card.component';

describe('SelectedCourseCardComponent', () => {
  let component: SelectedCourseCardComponent;
  let fixture: ComponentFixture<SelectedCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCourseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
