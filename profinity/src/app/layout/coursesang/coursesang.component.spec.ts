import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesangComponent } from './coursesang.component';

describe('CoursesangComponent', () => {
  let component: CoursesangComponent;
  let fixture: ComponentFixture<CoursesangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
