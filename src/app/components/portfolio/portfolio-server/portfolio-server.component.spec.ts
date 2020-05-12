import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioServerComponent } from './portfolio-server.component';

describe('PortfolioServerComponent', () => {
  let component: PortfolioServerComponent;
  let fixture: ComponentFixture<PortfolioServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
