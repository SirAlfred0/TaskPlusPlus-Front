import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTasksComponent } from './nav-tasks.component';

describe('NavTasksComponent', () => {
  let component: NavTasksComponent;
  let fixture: ComponentFixture<NavTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
