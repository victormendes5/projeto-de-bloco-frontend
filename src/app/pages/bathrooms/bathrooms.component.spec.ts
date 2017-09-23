import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomsComponent } from './bathrooms.component';

describe('BathroomsComponent', () => {
  let component: BathroomsComponent;
  let fixture: ComponentFixture<BathroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
