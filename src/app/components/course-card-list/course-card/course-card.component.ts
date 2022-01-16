import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: ICourse;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  public addToCart() {
    if (this.dataService.isCourseAlreadyInCart(this.course)) {
      // show "Course already in Cart" modal
      return;
    }
    this.dataService.addCourseToCart(this.course);
  }
}
