import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {
  @Input() courses: Array<ICourse> = [];

  constructor() {}

  ngOnInit(): void {
    this.courses = this.courses.splice(0, 5);
  }
}
