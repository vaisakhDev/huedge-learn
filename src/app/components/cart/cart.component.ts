import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { ICourse } from 'src/app/shared/models/course';
import { ModalType } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  modalSubscription!: Subscription;
  public courses: Array<ICourse> = [];
  public totalAmount: number = 0;
  public totalAmountSaved: number = 0;
  public recommendedCourses: Array<ICourse> = [];

  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

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

  public checkout() {
    this.modalSubscription = this.modalService
      .openModal(
        this.entry,
        'You have successfully placed your order',
        '',
        ModalType.SUCCESS,
        true
      )
      .subscribe((modalEvent) => {
        if (modalEvent === 'confirm') {
          this.dataService.emptyCart();
        }
      });
  }

  private loadRecommendedCourses() {
    this.recommendedCourses = this.dataService.getRecommendedCourses();
  }

  ngOnDestroy(): void {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}
