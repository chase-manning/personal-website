import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiplePortalComponent } from './digiple-portal.component';

describe('DigiplePortalComponent', () => {
  let component: DigiplePortalComponent;
  let fixture: ComponentFixture<DigiplePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigiplePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiplePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
