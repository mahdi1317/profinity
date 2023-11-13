import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailexpComponent } from './detailexp.component';

describe('DetailexpComponent', () => {
  let component: DetailexpComponent;
  let fixture: ComponentFixture<DetailexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
