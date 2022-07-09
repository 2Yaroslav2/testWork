import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCurrenciesComponent } from './course-currencies.component';

describe('CourseCurrenciesComponent', () => {
  let component: CourseCurrenciesComponent;
  let fixture: ComponentFixture<CourseCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
