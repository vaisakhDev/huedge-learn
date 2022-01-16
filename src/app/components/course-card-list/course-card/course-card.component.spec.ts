import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add course to cart on button click', () => {
    fixture.detectChanges();
    const mockCourse: ICourse = {
      actualPrice: 840,
      discountedPrice: 600,
      id: 1,
      author: 'Arthur Hansen',
      tags: ['accusantium', 'suscipit', 'adipisci'],
      details: 'Incidunt enim veniam. Id fugi',
      description: 'Tempore sed unde laboriosam qui consequatur rem.',
      title: 'doloribus sapiente facere sit laborum qui'
    };
    component.course = mockCourse;
    fixture.detectChanges();
    const isCourseAlreadyInCartSpy = spyOn(
      service,
      'isCourseAlreadyInCart'
    ).and.returnValue(false);
    const addCourseToCartSpy = spyOn(service, 'addCourseToCart');
    const addToCartButton = fixture.debugElement.query(
      (debugEl) => debugEl.name === 'button'
    );
    service.addCourseToCart(mockCourse);

    addToCartButton.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(service.isCourseAlreadyInCart).toHaveBeenCalled();
    expect(addCourseToCartSpy).toHaveBeenCalledWith(mockCourse);
  });
});
