import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public courses: Array<ICourse> = [];
  public totalAmount: number = 0;
  public totalAmountSaved: number = 0;
  public recommendedCourses: Array<ICourse> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.coursesInCart.subscribe((courses) => {
      this.courses = courses;
      this.totalAmount = this.courses.reduce(
        (sum, cur) =>
          sum + (cur.discountedPrice ? cur.discountedPrice : cur.actualPrice),
        0
      );
      const totalActualPrice = this.courses.reduce(
        (sum, cur) => sum + cur.actualPrice,
        0
      );
      this.totalAmountSaved = totalActualPrice - this.totalAmount;
    });
    this.loadRecommendedCourses();
  }

  public checkout() {}

  private loadRecommendedCourses() {
    this.recommendedCourses = this.dataService.getRecommendedCourses();
  }
}
