import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLiquidComponent } from './home-liquid.component';

describe('HomeLiquidComponent', () => {
  let component: HomeLiquidComponent;
  let fixture: ComponentFixture<HomeLiquidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLiquidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLiquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
