import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Tabs } from 'src/app/shared/tabs';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have courses tab', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.nav-link').textContent).toBe('COURSES');
  });

  it('should correctly @Output value of the selected Tab', () => {
    const tabChangeEventSpy = spyOn(component.tabChangeEvent, 'emit');

    const wishlistNavLink = fixture.debugElement.query(
      (debugEl) =>
        debugEl.name === 'a' &&
        debugEl.nativeElement.textContent === 'MY WISHLIST'
    );

    wishlistNavLink.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(tabChangeEventSpy).toHaveBeenCalledWith(Tabs.WISHLIST); // 4
  });
});
