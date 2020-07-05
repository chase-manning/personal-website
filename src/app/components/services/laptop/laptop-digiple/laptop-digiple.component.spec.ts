import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaptopDigipleComponent } from "./laptop-digiple.component";

describe("LaptopDigipleComponent", () => {
  let component: LaptopDigipleComponent;
  let fixture: ComponentFixture<LaptopDigipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopDigipleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopDigipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
