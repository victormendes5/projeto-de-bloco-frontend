import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPostsComponent } from './health-posts.component';

describe('HealthPostsComponent', () => {
  let component: HealthPostsComponent;
  let fixture: ComponentFixture<HealthPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
