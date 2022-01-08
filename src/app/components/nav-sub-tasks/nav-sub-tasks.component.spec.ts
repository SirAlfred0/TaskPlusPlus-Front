import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubTasksComponent } from './nav-sub-tasks.component';

describe('NavSubTasksComponent', () => {
  let component: NavSubTasksComponent;
  let fixture: ComponentFixture<NavSubTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
