import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tabs } from 'src/app/shared/tabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() tabChangeEvent = new EventEmitter<Tabs>();
  public tabs = Tabs;
  public currentTab: Tabs = Tabs.COURSES;
  constructor() {}

  ngOnInit(): void {}

  public changeTab(selectedTab: Tabs) {
    console.log(selectedTab);
    this.currentTab = selectedTab;
    this.tabChangeEvent.emit(selectedTab);
  }
}
