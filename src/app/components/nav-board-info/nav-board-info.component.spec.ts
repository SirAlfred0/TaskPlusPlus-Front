import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBoardInfoComponent } from './nav-board-info.component';

describe('NavBoardInfoComponent', () => {
  let component: NavBoardInfoComponent;
  let fixture: ComponentFixture<NavBoardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBoardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBoardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
