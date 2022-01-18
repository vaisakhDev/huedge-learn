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
  selector: 'app-selected-course-card',
  templateUrl: './selected-course-card.component.html',
  styleUrls: ['./selected-course-card.component.scss']
})
export class SelectedCourseCardComponent implements OnDestroy {
  @Input() course!: ICourse;
  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

  public removeFromCart() {
    this.dataService.removeCourseFromCart(this.course);
  }

  public addToWishlist() {}

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
