import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackgroundComponent } from './home-background.component';

describe('HomeBackgroundComponent', () => {
  let component: HomeBackgroundComponent;
  let fixture: ComponentFixture<HomeBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
