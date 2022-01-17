import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {
  public coursesInCart: Array<ICourse> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.coursesInCart.subscribe(
      (courses) => (this.coursesInCart = courses)
    );
  }
}
