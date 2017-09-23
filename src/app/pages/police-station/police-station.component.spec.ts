import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStationComponent } from './police-station.component';

describe('PoliceStationComponent', () => {
  let component: PoliceStationComponent;
  let fixture: ComponentFixture<PoliceStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
