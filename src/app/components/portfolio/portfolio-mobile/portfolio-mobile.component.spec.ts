import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMobileComponent } from './portfolio-mobile.component';

describe('PortfolioMobileComponent', () => {
  let component: PortfolioMobileComponent;
  let fixture: ComponentFixture<PortfolioMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
