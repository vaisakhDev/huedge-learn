import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardListComponent } from './course-card-list.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseCardListComponent, CourseCardComponent],
  exports: [CourseCardListComponent]
})
export class CourseCardListModule {}
