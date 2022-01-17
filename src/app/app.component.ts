import { Component } from '@angular/core';
import { Tabs } from './shared/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'huedge-learning-portal';

  public ALL_TABS = Tabs;
  public selectedTab: Tabs = Tabs.COURSES;

  public onTabChange(newTab: Tabs) {
    if (this.selectedTab === newTab) return;
    this.selectedTab = newTab;
  }
}
