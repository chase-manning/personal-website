import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConfirmationEmailComponent } from "./confirmation-email.component";

describe("ConfimationEmailComponent", () => {
  let component: ConfirmationEmailComponent;
  let fixture: ComponentFixture<ConfirmationEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationEmailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
