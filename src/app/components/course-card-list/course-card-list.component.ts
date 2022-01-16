import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {
  @Input() courses: Array<ICourse> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.courses = this.courses.splice(0, 5);
    this.dataService.coursesInCart.subscribe((coursesInCart) =>
      console.log(coursesInCart)
    );
  }
}
