import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDesktopComponent } from './portfolio-desktop.component';

describe('PortfolioDesktopComponent', () => {
  let component: PortfolioDesktopComponent;
  let fixture: ComponentFixture<PortfolioDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
