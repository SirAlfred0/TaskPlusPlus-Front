import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSystemMessagesComponent } from './nav-system-messages.component';

describe('NavSystemMessagesComponent', () => {
  let component: NavSystemMessagesComponent;
  let fixture: ComponentFixture<NavSystemMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSystemMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSystemMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
