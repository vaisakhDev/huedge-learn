import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { ICourse } from 'src/app/shared/models/course';
import { ModalType } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnDestroy {
  @ViewChild('modal', { read: ViewContainerRef })
  private entry!: ViewContainerRef;
  private modalSub!: Subscription;
  private courseId!: number;
  public courseDetails!: ICourse;
  public hoursToSaleEnd!: number;
  private videoUrl = 'https://www.youtube.com/embed/kuJNVKHHpGk';
  public safeUrl: SafeResourceUrl;
  private routeSub!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private modalService: ModalService,
    private router: Router
  ) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.routeSub = this.route.params.subscribe((params) => {
      this.courseId = params['id'];
      const courseDetails = this.dataService.getCourseById(this.courseId);
      if (!courseDetails) {
        this.router.navigateByUrl('/courses');
        return;
      }
      this.courseDetails = <ICourse>courseDetails;
      if (this.courseDetails.saleEndTime) {
        let hours =
          Math.abs(this.courseDetails.saleEndTime.getTime() - Date.now()) /
          36e5;
        this.hoursToSaleEnd = Math.round(hours);
      }
    });
  }

  public addToCart() {
    if (this.dataService.isCourseAlreadyInCart(this.courseDetails)) {
      this.modalService.openModal(
        this.entry,
        'Already Exist in cart',
        `Course "${this.courseDetails.title}" already exist in cart!`,
        ModalType.ERROR,
        false
      );
      return;
    }
    this.dataService.addCourseToCart(this.courseDetails);
    this.modalService.openModal(
      this.entry,
      'Course successfully added in the cart',
      '',
      ModalType.SUCCESS,
      false
    );
  }

  public addToWishlist() {
    this.dataService.addCourseToWishlist(this.courseDetails);
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.modalSub) {
      this.modalSub.unsubscribe();
    }
  }
}
