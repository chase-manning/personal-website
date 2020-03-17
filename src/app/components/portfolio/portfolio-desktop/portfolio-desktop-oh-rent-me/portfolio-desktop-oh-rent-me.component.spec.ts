import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDesktopOhRentMeComponent } from './portfolio-desktop-oh-rent-me.component';

describe('PortfolioDesktopOhRentMeComponent', () => {
  let component: PortfolioDesktopOhRentMeComponent;
  let fixture: ComponentFixture<PortfolioDesktopOhRentMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDesktopOhRentMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDesktopOhRentMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
