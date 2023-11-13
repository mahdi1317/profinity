import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitandpartnerComponent } from './recruitandpartner.component';

describe('RecruitandpartnerComponent', () => {
  let component: RecruitandpartnerComponent;
  let fixture: ComponentFixture<RecruitandpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitandpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitandpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
