import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';
import { SortOrder } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDropdownVisible = false;
  courses: Array<ICourse> = [];
  searchFilter = '';
  SortOrder = SortOrder;
  selectedSortOrder: SortOrder = SortOrder.ASC;

  constructor(private renderer: Renderer2, private dataService: DataService) {}

  ngOnInit(): void {
    this.getCourses();
    this.renderer.listen('window', 'click', (e: Event) => {
      this.isDropdownVisible = false;
    });
    this.dataService.coursesInWishlist.subscribe((wishlistItems) => {
      const courses = [...this.courses];
      let formattedCourses = courses.map((course) => {
        if (wishlistItems.find((item) => item.id === course.id)) {
          course.isWishlisted = true;
        }
        return course;
      });
      this.courses === [...formattedCourses];
    });
  }

  public toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  public changeSortOrder(newOrder: SortOrder) {
    this.selectedSortOrder = newOrder;
  }

  private getCourses() {
    let apiResponse = this.dataService.getAllCourses();

    this.courses = apiResponse.map((course: any) => {
      let actualPrice = Number(course.actualPrice);
      let discountedPrice = course.discountedPrice
        ? Number(course.discountedPrice)
        : null;
      let id = Number(course.id);
      return <ICourse>{
        actualPrice,
        discountedPrice,
        id,
        author: course.author,
        tags: course.tags,
        details: course.details,
        description: course.description,
        title: course.title
      };
    });
  }
}
