import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDropdownVisible = false;
  courses: Array<ICourse> = [];
  searchFilter = '';

  constructor(private renderer: Renderer2, private dataService: DataService) {}

  ngOnInit(): void {
    this.getCourses();
    this.renderer.listen('window', 'click', (e: Event) => {
      this.isDropdownVisible = false;
    });
  }

  public toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
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
