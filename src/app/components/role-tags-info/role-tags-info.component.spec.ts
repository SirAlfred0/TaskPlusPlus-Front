import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTagsInfoComponent } from './role-tags-info.component';

describe('RoleTagsInfoComponent', () => {
  let component: RoleTagsInfoComponent;
  let fixture: ComponentFixture<RoleTagsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleTagsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleTagsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
