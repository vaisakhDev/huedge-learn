import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';
import { SortOrder } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit, OnChanges {
  @Input() courses: Array<ICourse> = [];
  @Input() searchFilter = '';
  @Input() sortOrder = SortOrder.ASC;
  @Input() isCartMode = false;
  @Input() hideAddToWishlist = false;
  public paginatedCourses: Array<Array<ICourse>> = [];
  public pageSize: number = 4; // number of items displayed on each page
  public currentPageIndex = 0;
  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchFilter']) {
      // Reset page to first page.
      this.currentPageIndex = 0;
      const sortedCourses = this.sortCourses(this.filterCourses());
      this.paginatedCourses = this.splitToPages([...sortedCourses]);
    }
    if (changes['sortOrder']) {
      this.currentPageIndex = 0;
      const sortedCourses = this.sortCourses(this.filterCourses());
      this.paginatedCourses = this.splitToPages([...sortedCourses]);
    }
    if (changes['courses']) {
      this.currentPageIndex = 0;
      this.paginatedCourses = this.splitToPages([...this.courses]);
    }
  }

  ngOnInit(): void {
    this.paginatedCourses = this.splitToPages(
      this.sortCourses([...this.courses])
    );
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

  private filterCourses(): Array<ICourse> {
    const searchTerm = this.searchFilter.toLowerCase();
    const filteredCourses = this.courses.filter(
      (course) =>
        course.author.toLowerCase().includes(searchTerm) ||
        course.title.toLowerCase().includes(searchTerm) ||
        course.tags.find((tag) => tag.toLowerCase().includes(searchTerm))
    );
    return filteredCourses;
  }

  private sortCourses(courses: Array<ICourse>) {
    const returnVal = courses;
    if (this.sortOrder === SortOrder.ASC) {
      returnVal.sort(
        (a, b) =>
          (a.discountedPrice ? a.discountedPrice : a.actualPrice) -
          (b.discountedPrice ? b.discountedPrice : b.actualPrice)
      );
    } else {
      returnVal.sort(
        (a, b) =>
          (b.discountedPrice ? b.discountedPrice : b.actualPrice) -
          (a.discountedPrice ? a.discountedPrice : a.actualPrice)
      );
    }
    return returnVal;
  }
}
