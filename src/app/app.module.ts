import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { CourseCardListModule } from './components/course-card-list/course-card-list.module';
import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CartWidgetComponent,
    ModalComponent
  ],
  imports: [BrowserModule, CourseCardListModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
