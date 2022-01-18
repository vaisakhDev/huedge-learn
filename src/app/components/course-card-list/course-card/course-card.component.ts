import {
  Component,
  Input,
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
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit, OnDestroy {
  @Input() course!: ICourse;
  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  public addToCart() {
    if (this.dataService.isCourseAlreadyInCart(this.course)) {
      this.modalService.openModal(
        this.entry,
        'Already Exist in cart',
        `Course "${this.course.title}" already exist in cart!`,
        ModalType.ERROR,
        false
      );
      return;
    }
    this.dataService.addCourseToCart(this.course);
    this.modalService.openModal(
      this.entry,
      'Course successfully added in the cart',
      '',
      ModalType.SUCCESS,
      false
    );
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
