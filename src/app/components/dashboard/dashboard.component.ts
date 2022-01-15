import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDropdownVisible = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      this.isDropdownVisible = false;
    });
  }

  public toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
