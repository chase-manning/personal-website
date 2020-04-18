import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMobileWeathaComponent } from './portfolio-mobile-weatha.component';

describe('PortfolioMobileWeathaComponent', () => {
  let component: PortfolioMobileWeathaComponent;
  let fixture: ComponentFixture<PortfolioMobileWeathaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMobileWeathaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMobileWeathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
