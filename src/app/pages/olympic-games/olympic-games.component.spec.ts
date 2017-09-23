import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicGamesComponent } from './olympic-games.component';

describe('OlympicGamesComponent', () => {
  let component: OlympicGamesComponent;
  let fixture: ComponentFixture<OlympicGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympicGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
