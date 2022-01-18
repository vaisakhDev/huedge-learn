import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICourse } from 'src/app/shared/models/course';
import { SortOrder } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public isDropdownVisible = false;
  public SortOrder = SortOrder;
  public selectedSortOrder: SortOrder = SortOrder.ASC;
  public courses: Array<ICourse> = [];
  constructor(private renderer: Renderer2, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.coursesInWishlist.subscribe(
      (wishlistItems) => (this.courses = wishlistItems)
    );
    this.renderer.listen('window', 'click', (e: Event) => {
      this.isDropdownVisible = false;
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
}
