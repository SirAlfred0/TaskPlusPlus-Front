import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCommentsComponent } from './nav-comments.component';

describe('NavCommentsComponent', () => {
  let component: NavCommentsComponent;
  let fixture: ComponentFixture<NavCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
