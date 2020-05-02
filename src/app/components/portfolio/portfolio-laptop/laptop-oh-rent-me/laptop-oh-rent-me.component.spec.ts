import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopOhRentMeComponent } from './laptop-oh-rent-me.component';

describe('PortfolioDesktopOhRentMeComponent', () => {
  let component: LaptopOhRentMeComponent;
  let fixture: ComponentFixture<LaptopOhRentMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopOhRentMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopOhRentMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
