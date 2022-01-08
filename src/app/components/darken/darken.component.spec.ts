import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkenComponent } from './darken.component';

describe('DarkenComponent', () => {
  let component: DarkenComponent;
  let fixture: ComponentFixture<DarkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
