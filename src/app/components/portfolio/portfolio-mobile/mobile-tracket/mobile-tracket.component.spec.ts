import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTracketComponent } from './mobile-tracket.component';

describe('MobileTracketComponent', () => {
  let component: MobileTracketComponent;
  let fixture: ComponentFixture<MobileTracketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTracketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
