import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit, OnChanges {
  @Input() courses: Array<ICourse> = [];
  @Input() searchFilter = '';
  public paginatedCourses: Array<Array<ICourse>> = [];
  public pageSize: number = 4; // number of items displayed on each page
  public currentPageIndex = 0;
  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchFilter']) {
      this.filterCourses();
    }
  }

  ngOnInit(): void {
    this.paginatedCourses = this.splitToPages([...this.courses]);
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

  private splitToPages(allCourses: Array<ICourse>) {
    var results = [];

    while (allCourses.length) {
      results.push(allCourses.splice(0, this.pageSize));
    }

    return results;
  }

  private filterCourses() {
    // Reset page to first page.
    this.currentPageIndex = 0;
    let filteredCourses = this.courses.filter(
      (course) =>
        course.author.includes(this.searchFilter) ||
        course.title.includes(this.searchFilter) ||
        course.tags.find((tag) => tag.includes(this.searchFilter))
    );

    this.paginatedCourses = this.splitToPages(filteredCourses);
  }
}
