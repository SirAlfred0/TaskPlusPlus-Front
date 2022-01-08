import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContactListComponent } from './nav-contact-list.component';

describe('NavContactListComponent', () => {
  let component: NavContactListComponent;
  let fixture: ComponentFixture<NavContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
