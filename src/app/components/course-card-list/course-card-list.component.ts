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
  public paginatedCourses: Array<Array<ICourse>> = [];
  public pageSize: number = 4; // number of items displayed on each page
  public currentPageIndex = 0;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.paginatedCourses = this.splitToPages();
  }

  public nextPage() {
    this.currentPageIndex = this.currentPageIndex + 1;
  }

  public previousPage() {
    this.currentPageIndex = this.currentPageIndex - 1;
  }

  public changePage(pageIndex: number) {
    this.currentPageIndex = pageIndex;
  }

  private splitToPages() {
    var results = [];

    while (this.courses.length) {
      results.push(this.courses.splice(0, this.pageSize));
    }

    return results;
  }
}
