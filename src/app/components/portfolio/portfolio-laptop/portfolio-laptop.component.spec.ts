import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLaptopComponent } from './portfolio-laptop.component';

describe('PortfolioLaptopComponent', () => {
  let component: PortfolioLaptopComponent;
  let fixture: ComponentFixture<PortfolioLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
