import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTopMenuComponent } from './comment-top-menu.component';

describe('CommentTopMenuComponent', () => {
  let component: CommentTopMenuComponent;
  let fixture: ComponentFixture<CommentTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentTopMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
