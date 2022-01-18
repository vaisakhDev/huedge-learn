import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardListComponent } from './course-card-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { SelectedCourseCardComponent } from './selected-course-card/selected-course-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    CourseCardListComponent,
    CourseCardComponent,
    SelectedCourseCardComponent
  ],
  exports: [CourseCardListComponent]
})
export class CourseCardListModule {}
