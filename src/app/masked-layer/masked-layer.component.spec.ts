import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedLayerComponent } from './masked-layer.component';

describe('MaskedLayerComponent', () => {
  let component: MaskedLayerComponent;
  let fixture: ComponentFixture<MaskedLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskedLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskedLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
