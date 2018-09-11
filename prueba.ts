import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSumaComponent } from './form-suma.component';

describe('FormSumaComponent', () => {
  let component: FormSumaComponent;
  let fixture: ComponentFixture<FormSumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
