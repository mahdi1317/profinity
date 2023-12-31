import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rdv2Component } from './rdv2.component';

describe('Rdv2Component', () => {
  let component: Rdv2Component;
  let fixture: ComponentFixture<Rdv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rdv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rdv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
